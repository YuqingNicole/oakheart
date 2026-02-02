import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Globe, Users, Gamepad2, Info } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SeoHead } from '@/components/seo/SeoHead';
import { SeoBreadcrumbs } from '@/components/seo/SeoBreadcrumbs';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { StickyCTA } from '@/components/layout/StickyCTA';
import { publishers, Publisher } from '@/data/publishers';
import { ContentSection } from '@/components/seo/ContentSection';

interface PublisherDetailProps {
  publisher: Publisher;
}

export default function PublisherDetail({ publisher }: PublisherDetailProps) {
  const breadcrumbs = [
    { label: "Publishers", href: "/publishers" },
    { label: publisher.name, href: `/publishers/${publisher.slug}` }
  ];

  const pageTitle = `How to Submit to ${publisher.name} | Submission Guidelines`;
  const pageDesc = `Looking to publish with ${publisher.name}? Find their submission guidelines, contact information, and what they are looking for. ${publisher.description}`;

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={pageTitle}
        description={pageDesc}
        keywords={`${publisher.name} submissions, submit to ${publisher.name}, board game publisher, ${publisher.categories.join(', ')}`}
      />
      
      <Header />
      
      <main className="pt-32 pb-20">
        <Container>
          <div className="mb-8">
             <Link href="/publishers" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
               <ArrowLeft className="w-4 h-4 mr-1" /> Back to Directory
             </Link>
             <SeoBreadcrumbs items={breadcrumbs} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Content Column */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{publisher.name}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {publisher.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                <Badge variant="outline" className="text-sm py-1 px-3 bg-background">{publisher.country}</Badge>
                {publisher.categories.map(cat => (
                  <Badge key={cat} variant="secondary" className="text-sm py-1 px-3">
                    {cat}
                  </Badge>
                ))}
              </div>

              <ContentSection className="mb-10">
                <h2>What They Are Looking For</h2>
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10 not-prose mb-6">
                  <p className="text-lg font-medium text-foreground mb-0">
                    "{publisher.interestedIn}"
                  </p>
                </div>
                
                <h3>Submission Guidelines</h3>
                <p>
                  <strong>Status:</strong> {publisher.acceptingSubmissions ? 
                    <span className="text-green-600 font-bold">Currently Accepting Submissions</span> : 
                    <span className="text-red-600 font-bold">Currently Closed</span>
                  }
                </p>
                
                <p>
                  <strong>Preferred Method:</strong> {publisher.contact.preferred}
                </p>
                
                {publisher.contact.info.startsWith('http') ? (
                  <p>
                    <strong>Submission Link:</strong>{' '}
                    <a href={publisher.contact.info} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">
                      Visit Submission Page <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </p>
                ) : (
                  <p>
                    <strong>Contact:</strong> {publisher.contact.info}
                  </p>
                )}
              </ContentSection>

              <div className="bg-muted/30 p-8 rounded-xl border mb-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Before You Submit
                </h3>
                <p className="text-muted-foreground mb-6">
                  Publishers receive hundreds of submissions. Make sure your sell sheet is clear and your prototype looks professional to stand out from the crowd.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/guides/manufacturing-101">
                    <Button variant="outline" className="w-full sm:w-auto">Read Manufacturing Guide</Button>
                  </Link>
                  <Link href="/quote">
                    <Button className="w-full sm:w-auto">Get a Prototype Quote</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4">Publisher Stats</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Gamepad2 className="w-4 h-4" /> Catalog Size
                        </span>
                        <span className="font-medium">{publisher.catalogSize}</span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Globe className="w-4 h-4" /> Website
                        </span>
                        <a href={publisher.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm truncate max-w-[150px]">
                          {new URL(publisher.website).hostname}
                        </a>
                      </div>
                      {publisher.social.bgg && (
                        <>
                          <Separator />
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-2">
                              <Users className="w-4 h-4" /> BGG Profile
                            </span>
                            <a href={publisher.social.bgg} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                              View Profile
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                  <CardContent className="pt-6 relative z-10">
                    <h3 className="font-bold text-xl mb-2">Need a Prototype?</h3>
                    <p className="text-primary-foreground/90 text-sm mb-6">
                      Oakheart specializes in high-quality prototypes with low MOQs (starting at 1 unit).
                    </p>
                    <Link href="/quote">
                      <Button variant="secondary" className="w-full font-bold">
                        Start Your Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <div className="bg-muted p-4 rounded-lg text-xs text-muted-foreground">
                  <p>
                    <strong>Disclaimer:</strong> Oakheart Games is a manufacturing service and is not affiliated with {publisher.name}. This page is for informational purposes only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      
      <Footer />
      <StickyCTA />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = publishers.map((publisher) => ({
    params: { slug: publisher.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const publisher = publishers.find((p) => p.slug === params?.slug);
  
  return {
    props: {
      publisher,
    },
  };
};
