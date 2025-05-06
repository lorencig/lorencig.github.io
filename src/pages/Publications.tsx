
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';

const publications = [
  {
    id: 1,
    title: "Novel Synthesis Method for Gold Nanorods with Enhanced Stability for Biomedical Applications",
    authors: "Your Name, Collaborator A, Collaborator B",
    journal: "Journal of Nanomaterials",
    volume: "15",
    issue: "3",
    pages: "245-258",
    year: 2023,
    doi: "10.1000/example.2023.001"
  },
  {
    id: 2,
    title: "Machine Learning Approaches to Predict Nanoparticle Toxicity from Physicochemical Properties",
    authors: "Your Name, Collaborator C",
    journal: "ACS Nano",
    volume: "16",
    issue: "2",
    pages: "1205-1217",
    year: 2022,
    doi: "10.1000/example.2022.002"
  },
  {
    id: 3,
    title: "Data-Driven Optimization of Liposomal Drug Delivery Systems",
    authors: "Collaborator D, Your Name, Collaborator E",
    journal: "Advanced Drug Delivery Reviews",
    volume: "174",
    issue: "",
    pages: "45-62",
    year: 2021,
    doi: "10.1000/example.2021.003"
  },
  {
    id: 4,
    title: "Computational Framework for Analysis of Nanoparticle-Protein Interactions",
    authors: "Your Name, Collaborator F, Collaborator G",
    journal: "Nanoscale",
    volume: "12",
    issue: "8",
    pages: "4378-4390",
    year: 2021,
    doi: "10.1000/example.2021.004"
  },
  {
    id: 5,
    title: "Sustainable Synthesis of Gold Nanoparticles Using Plant Extracts and Their Antimicrobial Properties",
    authors: "Collaborator H, Your Name",
    journal: "Green Chemistry",
    volume: "22",
    issue: "5",
    pages: "672-688",
    year: 2020,
    doi: "10.1000/example.2020.005"
  },
  {
    id: 6,
    title: "Structure-Function Relationships in Engineered Nanomaterials for Cancer Therapy",
    authors: "Your Name, Collaborator I, Collaborator J, Collaborator K",
    journal: "Biomaterials",
    volume: "232",
    issue: "",
    pages: "119740",
    year: 2020,
    doi: "10.1000/example.2020.006"
  }
];

const Publications: React.FC = () => {
  // Group publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, typeof publications>);
  
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

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  volume: string;
  issue: string;
  pages: string;
  year: number;
  doi: string;
}

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
        <p className="text-muted-foreground mb-2">{publication.authors}</p>
        <p>
          <span className="font-medium">{publication.journal}</span>
          {publication.volume && `, ${publication.volume}`}
          {publication.issue && `(${publication.issue})`}
          {publication.pages && `, ${publication.pages}`}
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
