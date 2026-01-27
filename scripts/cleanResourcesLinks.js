const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, cb);
    } else if (entry.isFile()) {
      cb(fullPath);
    }
  }
}

function cleanMarkdown(content) {
  const lines = content.split('\n');

  const processed = lines
    .map((line) => {
      let s = line;

      // Remove "Source: <url>" lines later via filter; here just leave as-is

      // Strip markdown links but keep visible text: [text](http...)
      s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '$1');

      // Strip bare http/https URLs that might appear in text
      s = s.replace(/https?:\/\/\S+/g, '');

      return s;
    })
    .filter((line) => {
      const trimmed = line.trim();

      // Drop explicit Source lines pointing to the web
      if (/^Source:\s*https?:\/\//i.test(trimmed)) return false;

      // Drop image lines that load from remote URLs
      if (/!\[[^\]]*\]\(\s*https?:\/\/[^\s)]+\s*\)/i.test(trimmed)) return false;

      return true;
    });

  const joined = processed.join('\n');

  // Collapse 3+ blank lines to at most 2
  return joined.replace(/\n{3,}/g, '\n\n');
}

function main() {
  const root = path.join(__dirname, '..', 'resources');

  if (!fs.existsSync(root)) {
    console.error('resources directory not found:', root);
    process.exit(1);
  }

  walk(root, (filePath) => {
    if (!filePath.endsWith('.md')) return;

    const original = fs.readFileSync(filePath, 'utf8');
    const cleaned = cleanMarkdown(original);

    if (cleaned !== original) {
      fs.writeFileSync(filePath, cleaned, 'utf8');
      console.log('Cleaned links in', path.relative(root, filePath));
    }
  });
}

if (require.main === module) {
  main();
}

