import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { PublicationData } from '@/common/types'; // Import common type
import { allPublicationsData } from '@/data/publications'; // Import all publications data

const Publications: React.FC = () => {
  // Group publications by year
  const publicationsByYear = allPublicationsData.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, PublicationData[]>); // Use PublicationData[]

  // Sort years in descending order
  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <PageLayout>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Publications</h1>
            <p className="text-lg text-muted-foreground">
              Peer-reviewed scientific articles on nanomaterials synthesis, characterization, and applications.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {years.map(year => (
              <div key={year} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">{year}</h2>
                <div className="space-y-6">
                  {publicationsByYear[year].map(publication => (
                    <PublicationCard key={publication.id} publication={publication} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

interface PublicationCardProps {
  publication: PublicationData; // Use common type
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/60">
      <CardContent className="p-6">
         {publication.link ? (
             <a href={publication.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
             </a>
         ) : (
            <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
         )}
        <p className="text-muted-foreground mb-2">{publication.authors}</p>
        <p className="text-sm">
          <span className="font-medium">{publication.journal}</span>
          {publication.volume && `, Vol. ${publication.volume}`}
          {publication.issue && `, Iss. ${publication.issue}`}
          {publication.pages && `, pp. ${publication.pages}`}
          {publication.year && ` (${publication.year})`}
        </p>
        <p className="text-sm mt-2">
          <span className="text-muted-foreground">DOI: </span>
          <a
            href={`https://doi.org/${publication.doi}`}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {publication.doi}
          </a>
        </p>
      </CardContent>
    </Card>
  );
};

export default Publications;