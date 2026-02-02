import { useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Search } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SeoHead } from '@/components/seo/SeoHead';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { publishers, Publisher } from '@/data/publishers';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { StickyCTA } from '@/components/layout/StickyCTA';

interface PublisherIndexProps {
  allPublishers: Publisher[];
}

export default function PublisherIndex({ allPublishers }: PublisherIndexProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPublishers = allPublishers.filter(pub => 
    pub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Board Game Publisher Database | Find Publishers for Your Game"
        description="The most comprehensive database of board game publishers. Find submission guidelines, contact info, and publisher preferences to pitch your board game."
        keywords="board game publishers, submit board game, game publishing, board game design, publisher database"
      />
      
      <Header />
      
      <main className="pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Find the Perfect Publisher
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our curated database of board game publishers. Filter by genre, submission status, and more to find the right home for your game.
            </p>
            
            <div className="relative max-w-xl mx-auto flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search by name or category..." 
                  className="pl-10 h-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublishers.map((publisher) => (
              <Link href={`/publishers/${publisher.slug}`} key={publisher.id} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="bg-background">
                        {publisher.country}
                      </Badge>
                      {publisher.acceptingSubmissions ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
                          Accepting Submissions
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                          Closed
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {publisher.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {publisher.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {publisher.categories.slice(0, 3).map(cat => (
                        <span key={cat} className="text-xs bg-secondary/50 px-2 py-1 rounded-md text-secondary-foreground">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">Catalog:</span> {publisher.catalogSize}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-medium text-foreground">Famous for:</span> {publisher.representativeGames[0]}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                    View Submission Guidelines →
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPublishers.length === 0 && (
            <div className="text-center py-20 bg-muted/30 rounded-lg border border-dashed">
              <p className="text-muted-foreground text-lg">No publishers found matching "{searchTerm}"</p>
              <Button variant="link" onClick={() => setSearchTerm('')}>Clear search</Button>
            </div>
          )}
          
          <div className="mt-20 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see a publisher?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're constantly updating our database. If you're a publisher and want to be listed, or if you know one we missed, let us know.
            </p>
            <Button variant="outline">Submit a Publisher</Button>
          </div>
        </Container>
      </main>
      
      <Footer />
      <StickyCTA />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allPublishers: publishers,
    },
  };
};
