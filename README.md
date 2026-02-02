# Oakheart - 桌游创作者的一站式成功指南

**从设计到出版，从众筹到发货，助你将创意变成货架上的游戏。**

[![Publishers](https://img.shields.io/badge/出版商数据库-345+-blue)](./site/publishers)
[![Guides](https://img.shields.io/badge/实战指南-150+-green)](./resources/Guides)
[![Rankings](https://img.shields.io/badge/排行榜-2025-orange)](./resources/Rankings)

---

## 为什么选择 Oakheart？

| 你的痛点 | 我们的解决方案 |
|---------|--------------|
| 不知道从何开始设计游戏 | 📚 **系统化设计指南** - 从核心机制到测试迭代 |
| 找不到适合的出版商 | 🔍 **345+ 出版商数据库** - 按类型、国家、投稿状态筛选 |
| 众筹不知道怎么做 | 🚀 **50+ 众筹实战教程** - 来自成功出版商的经验 |
| 关税和物流让人头疼 | 💰 **最新行业洞察** - 定价模型、物流选择、关税应对 |

---

## 核心资源

### 🔍 出版商数据库 (Programmatic SEO)
**345+ 全球出版商** | **202 家接受投稿** | **41 个国家**

```
site/publishers/
├── index.md                    # 主索引页
├── {publisher-slug}.md         # 345+ 出版商详情页
├── country/{country}.md        # 41 个国家筛选页
└── type/{game-type}.md         # 21 种游戏类型筛选页
```

每个出版商页面包含：
- 基本信息 (国家、规模、众筹频率)
- 他们在找什么样的游戏
- 代表作品
- 投稿方式和联系信息
- 社交媒体链接
- Schema.org 结构化数据 (SEO)

### 📚 实战指南 (150+ 篇)

```
resources/Guides/
├── Crowdfunding/    # 众筹攻略 (50篇) - Kickstarter、社区建设、定价
├── Publishing/      # 出版实战 (15篇) - 制造商选择、物流、关税
├── Career/          # 职业发展 (20篇) - 如何进入行业
├── Community/       # 社区运营 (16篇) - Facebook群组、Discord
├── GameDesign/      # 设计基础 (5篇) - 核心机制
├── Inspiration/     # 灵感来源 (10篇) - 设计师访谈
└── Productivity/    # 效率工具 (15篇) - 工作流程优化
```

### 📊 排行榜内容 (高分享性)
```
resources/Rankings/
├── 2025/
│   ├── Best_Two_Player_Games.md
│   ├── Best_Family_Board_Games.md
│   └── Best_Board_Games_for_Kids.md
└── 2026/
    └── Most_Anticipated_Board_Games.md
```

---

## 目录结构 (完整)

```
oakheart/
├── site/                               # 生成的 SEO 页面 (408页)
│   └── publishers/                     # 出版商数据库
│       ├── index.md                    # 主页
│       ├── *.md                        # 345 出版商详情页
│       ├── country/*.md                # 41 国家筛选页
│       └── type/*.md                   # 21 类型筛选页
├── resources/                          # 内容资源 (153篇)
│   ├── Guides/                         # 实战指南
│   ├── Rankings/                       # 排行榜
│   └── Blogs/                          # 博客文章
├── publishers.csv                      # 出版商原始数据
├── generate_publisher_pages.py         # 页面生成脚本
├── MARKETING_OPTIMIZATION.md           # Marketing 优化方案
├── scrape_*.py                         # 数据爬取脚本
└── README.md
```

## Content Pillars (内容支柱策略)

基于 Hub & Spoke SEO 模型，我们围绕4个核心主题构建内容：

### Pillar 1: 游戏设计入门 (Awareness Stage)
**目标用户**: 有创意想法的新手设计师
**目标关键词**: `board game design`, `how to design a board game`, `桌游设计入门`

| 内容 | 文件 | 类型 |
|-----|-----|-----|
| 🏠 Hub: 设计入门完全指南 | `/guides/board-game-design-101` | Pillar |
| 设计的10个核心要素 | `resources/Guides/GameDesign/` | Spoke |
| 设计师常犯的10个错误 | `resources/Guides/Career/` | Spoke |
| 原型制作指南 | `resources/Guides/` | Spoke |

### Pillar 2: Kickstarter 众筹攻略 (Consideration Stage)
**目标用户**: 准备发布的进阶设计师
**目标关键词**: `kickstarter board game`, `游戏众筹`, `crowdfunding guide`

| 内容 | 文件 | 类型 |
|-----|-----|-----|
| 🏠 Hub: 众筹完全攻略 | `/guides/kickstarter-masterclass` | Pillar |
| 10个众筹红旗 | `Guides/Crowdfunding/10-red-flags-*.md` | Spoke |
| 完美页面线框图 | `Guides/Crowdfunding/creating-the-perfect-*.md` | Spoke |
| 社区建设4部曲 | `Guides/Crowdfunding/growing-a-community-*.md` | Spoke |
| VAT新手指南 | `Guides/Crowdfunding/a-beginners-guide-to-vat.md` | Spoke |

### Pillar 3: 出版商数据库 (Decision Stage)
**目标用户**: 寻找出版商的设计师
**目标关键词**: `board game publishers`, `桌游出版商`, `game publisher submissions`

| 内容 | 文件 | 类型 |
|-----|-----|-----|
| 🏠 Hub: 出版商数据库 | `site/publishers/index.md` | Pillar |
| 出版商详情页 x345 | `site/publishers/*.md` | Programmatic |
| 国家筛选页 x41 | `site/publishers/country/*.md` | Programmatic |
| 类型筛选页 x21 | `site/publishers/type/*.md` | Programmatic |

### Pillar 4: 行业洞察 (Thought Leadership)
**目标用户**: 独立出版商、行业从业者
**目标关键词**: `board game industry`, `tariff impact games`, `游戏出版`

| 内容 | 文件 | 类型 |
|-----|-----|-----|
| 🏠 Hub: 行业深度洞察 | `/industry` | Pillar |
| 行业危机分析 | `Guides/Publishing/an-industry-in-crisis-*.md` | Shareable |
| 关税定价模型 | `Guides/Publishing/pricing-games-with-tariffs.md` | Shareable |
| 物流选择指南 | `Guides/Crowdfunding/choosing-fulfillment-*.md` | Spoke |

---

## SEO 实施成果

### 已生成页面统计

| 页面类型 | 数量 | SEO价值 | 状态 |
|---------|-----|--------|-----|
| 出版商详情页 | 345 | ⭐⭐⭐⭐⭐ 长尾关键词 | ✅ 已生成 |
| 国家筛选页 | 41 | ⭐⭐⭐⭐ 地域搜索 | ✅ 已生成 |
| 类型筛选页 | 21 | ⭐⭐⭐⭐ 类型搜索 | ✅ 已生成 |
| 实战指南 | 153 | ⭐⭐⭐⭐⭐ 高质量内容 | ✅ 已有 |
| Pillar Hub页 | 4 | ⭐⭐⭐⭐⭐ 核心支柱 | 🔄 待创建 |
| **总计** | **564** | | |

### Programmatic SEO 架构

```
site/publishers/
│
├── index.md                    # 主入口 (345+ publishers)
│
├── 25th-century-games.md       # 详情页 (含Schema.org)
├── alley-cat-games.md          # 详情页
├── ... (345 pages)
│
├── country/
│   ├── usa.md                  # 166家出版商
│   ├── united-kingdom.md       # 26家出版商
│   ├── germany.md              # 16家出版商
│   └── ... (41 countries)
│
└── type/
    ├── board-games.md          # 302家出版商
    ├── euro-games.md           # 169家出版商
    ├── family-games.md         # 214家出版商
    └── ... (21 types)
```

### 每个出版商页面包含

```markdown
---
title: "{Name} - 桌游出版商投稿指南 | Oakheart"
description: "SEO优化的元描述"
keywords: "长尾关键词"
---

# {Publisher Name}

<script type="application/ld+json">
{Schema.org 结构化数据}
</script>

## 基本信息 (表格)
## 感兴趣的游戏类型
## 他们在找什么样的游戏 (核心SEO内容)
## 代表作品
## 如何投稿
## 社交媒体
## 常参加的展会
## 相关出版商 (内链)
## 下一步 (CTA)
```

---

## 快速开始

### 1. 生成出版商页面
```bash
# 安装依赖 (无额外依赖)
python generate_publisher_pages.py

# 输出:
# Generated 345 publisher pages
# Generated 41 country index pages
# Generated 21 type index pages
```

### 2. 浏览生成的页面
```bash
# 查看出版商主页
cat site/publishers/index.md

# 查看单个出版商
cat site/publishers/25th-century-games.md

# 查看国家筛选
cat site/publishers/country/usa.md
```

### 3. 搜索内容资源
```bash
# 搜索众筹相关
grep -r "kickstarter" resources/ --include="*.md"

# 搜索设计指南
ls resources/Guides/GameDesign/

# 统计资源数量
find resources -name "*.md" | wc -l  # 153篇
```

---

## Marketing 优化详情

完整的 Marketing 优化方案请查看: **[MARKETING_OPTIMIZATION.md](./MARKETING_OPTIMIZATION.md)**

包含:
- 品牌定位优化
- Content Pillars 重构
- Programmatic SEO 实施细节
- 页面 SEO 模板 (Title, Description, Schema.org)
- 内容差距分析
- 内部链接策略
- 实施优先级和 KPI

---

## 下一步开发计划

### Phase 1: 基础完善 (当前)
- [x] 出版商页面自动生成 (345页)
- [x] 国家/类型筛选页 (62页)
- [x] Schema.org 结构化数据
- [ ] Pillar Hub 页面创建

### Phase 2: 内容扩充
- [ ] 补充缺失高价值内容 (见 MARKETING_OPTIMIZATION.md)
- [ ] 创建定价计算器工具页
- [ ] 添加案例研究内容

### Phase 3: 网站部署
- [ ] 选择静态站点生成器 (Hugo/Astro)
- [ ] 配置 sitemap.xml
- [ ] 提交 Google Search Console

---

## 贡献指南

欢迎贡献新的出版商数据或内容资源！

1. 出版商数据: 更新 `publishers.csv` 然后运行 `python generate_publisher_pages.py`
2. 内容资源: 添加到 `resources/Guides/` 对应目录

---

## License

MIT License
