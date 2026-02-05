import { useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SeoHead } from '@/components/seo/SeoHead';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts, BlogPost } from '@/data/blog-posts';
import { StickyCTA } from '@/components/layout/StickyCTA';

interface BlogIndexProps {
  posts: BlogPost[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categories = Array.from(new Set(posts.map(p => p.category)));

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Board Game Industry Insights & Guides | Oakheart Blog"
        description="Expert advice on board game design, manufacturing, crowdfunding, and publishing. Learn from industry veterans and stay updated with the latest trends."
        keywords="board game blog, game design tips, kickstarter advice, board game manufacturing, industry insights"
        canonicalUrl="/blog"
      />
      
      <Header />
      
      <main className="pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Industry Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Deep dives into game design, crowdfunding strategies, and manufacturing best practices.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.map(cat => (
                <Badge key={cat} variant="outline" className="cursor-pointer hover:bg-secondary" onClick={() => setSearchTerm(cat)}>
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group h-full">
                <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 bg-card overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center mb-3">
                      <Badge variant="secondary" className="text-xs font-medium">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readingTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0">
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-4 pb-5 flex items-center justify-between border-t border-border/50 mt-auto">
                    <div className="flex items-center text-xs text-muted-foreground gap-3">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 bg-muted/30 rounded-lg border border-dashed">
              <p className="text-muted-foreground text-lg">No articles found matching "{searchTerm}"</p>
              <Button variant="link" onClick={() => setSearchTerm('')}>Clear search</Button>
            </div>
          )}

        </Container>
      </main>
      
      <Footer />
      <StickyCTA />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Sort posts by date descending
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
};
