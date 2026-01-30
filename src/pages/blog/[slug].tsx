import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SeoHead } from '@/components/seo/SeoHead';
import { SeoBreadcrumbs } from '@/components/seo/SeoBreadcrumbs';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContentSection } from '@/components/seo/ContentSection';
import { StickyCTA } from '@/components/layout/StickyCTA';
import { blogPosts, BlogPost } from '@/data/blog-posts';

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostPage({ post, relatedPosts }: BlogPostPageProps) {
  const breadcrumbs = [
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={`${post.title} | Oakheart Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogType="article"
      />
      
      <Header />
      
      <main className="pt-32 pb-20">
        <Container>
          <div className="mb-8">
             <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
               <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
             </Link>
             <SeoBreadcrumbs items={breadcrumbs} />
          </div>

          <article className="max-w-3xl mx-auto">
            <header className="mb-10 text-center">
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground border-y py-4">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" /> {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {post.readingTime}
                </span>
              </div>
            </header>

            <ContentSection>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </ContentSection>

            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-16 bg-muted/30 p-8 rounded-2xl border border-dashed text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to make your game?</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Whether you're prototyping or ready for mass production, Oakheart is here to help you bring your vision to the table.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/quote">
                  <Button size="lg">Get a Quote</Button>
                </Link>
                <Link href="/guides/manufacturing-101">
                  <Button variant="outline" size="lg">Read Manufacturing Guide</Button>
                </Link>
              </div>
            </div>
          </article>
          
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-10 border-t">
              <h2 className="text-2xl font-bold mb-8">Read Next</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(related => (
                  <Link href={`/blog/${related.slug}`} key={related.slug} className="group">
                    <div className="p-6 rounded-xl border bg-card hover:shadow-md transition-all">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{related.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{related.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </Container>
      </main>
      
      <Footer />
      <StickyCTA />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== params?.slug && p.category === post.category)
    .slice(0, 3);
  
  return {
    props: {
      post,
      relatedPosts,
    },
  };
};
