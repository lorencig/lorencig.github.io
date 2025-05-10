import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PublicationData } from '@/common/types'; // Ensure this type includes 'doi' and 'link'
import { allPublicationsData } from '@/data/publications';
import { BookText, Link as LinkIcon } from 'lucide-react';

const Publications: React.FC = () => {
  const publicationsByYear = allPublicationsData.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, PublicationData[]>);

  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <PageLayout>
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background elements (same as Projects page) */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/4 w-1/5 h-1/5 bg-red-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent pb-2">
              publications
            </h1>
            {/* <p className="text-lg text-muted-foreground backdrop-blur-sm bg-background/30 p-3 rounded-lg inline-block">
              Description
            </p> */}
          </div>

          <div className="max-w-4xl mx-auto">
            {years.map(year => (
              <div key={year} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent pb-1">
                  {year}
                </h2>
                <div className="space-y-8">
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
  publication: PublicationData;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const [isAbstractVisible, setIsAbstractVisible] = useState(false);

  const toggleAbstract = () => setIsAbstractVisible(!isAbstractVisible);

  const highlightName = (authors: string) => {
    // <-- REPLACE WITH YOUR NAME TO HIGHLIGHT if needed -->
    // Example: const nameToHighlight = "John Doe";
    const nameToHighlight = ""; // Assuming you highlight an empty string as per original code (likely placeholder)

    const parts = authors.split(', ');

    // Use flatMap to map authors and insert commas between them
    return parts.flatMap((author, index) => {
      const trimmedAuthor = author.trim();
      // Create the element for the current author
      const authorElement = trimmedAuthor === nameToHighlight ? (
        <strong key={index} className="text-primary font-semibold">{author}</strong>
      ) : (
        // Use span for non-highlighted parts and ensure key is here
        <span key={index}>{author}</span>
      );

      // If it's the first author, just return the element
      if (index === 0) {
        return [authorElement];
      } else {
        // For subsequent authors, return a comma followed by the element
        return [', ', authorElement];
      }
    });
  };

  return (
    <Card className="border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 backdrop-blur-sm bg-background/40 h-full transform group-hover:translate-y-[-5px] flex flex-col">
      <CardContent className="p-6">
        {/* Title link is still based on publication.link */}
        {publication.link ? (
          <a href={publication.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block"> {/* Use block to make the whole title clickable */}
            <h3 className="text-xl font-semibold mb-2 hover:underline">{publication.title}</h3>
          </a>
        ) : (
          <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
        )}
        <p className="text-muted-foreground mb-3 text-sm">
          {/* Render the array returned by highlightName */}
          {highlightName(publication.authors)}
        </p>
        <p className="text-sm mb-3 text-foreground/80">
          <span className="font-medium italic">{publication.journal}</span>
          {publication.volume && `, Vol. ${publication.volume}`}
          {publication.issue && `, Iss. ${publication.issue}`}
          {publication.pages && `, pp. ${publication.pages}`}
          {publication.year && ` (${publication.year})`}
        </p>

        {isAbstractVisible && publication.abstract && (
          <div className="mt-4 mb-4 p-4 bg-muted/50 rounded-md border border-border/30 transition-all duration-300 ease-in-out">
            <h4 className="text-sm font-semibold mb-2 text-foreground/90">Abstract</h4>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {publication.abstract}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-wrap gap-x-4 gap-y-2 items-center">

        {/* Conditional rendering for the primary external link (DOI or general link) */}
        {publication.doi ? (
          // If DOI exists, show the DOI link
          <a
            href={`https://doi.org/${publication.doi}`}
            className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon size={16} /> DOI
          </a>
        ) : publication.link ? (
          // If DOI does NOT exist, but a general link DOES exist, show the general link
          <a
            href={publication.link}
            className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon size={16} /> View Resource {/* Changed label */}
          </a>
        ) : null} {/* If neither DOI nor general link exists, render nothing in this spot */}

        {/* Abstract Button (remains unchanged) */}
        {publication.abstract && (
          <Button
            variant="outline"
            size="sm"
            onClick={toggleAbstract}
            aria-expanded={isAbstractVisible}
            aria-controls={`abstract-${publication.id}`}
            className="flex items-center gap-2"
          >
            <BookText size={16} />
            {isAbstractVisible ? 'Hide Abstract' : 'Show Abstract'}
          </Button>
        )}

      </CardFooter>
      {/* Added hidden abstract for accessibility */}
      {isAbstractVisible && publication.abstract && <div id={`abstract-${publication.id}`} className="sr-only">{publication.abstract}</div>}
    </Card>
  );
};

export default Publications;