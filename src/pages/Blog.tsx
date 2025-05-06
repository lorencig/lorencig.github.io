
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const quotes = [
  {
    id: 1,
    content: "The beauty of nanoscience lies in seeing the extraordinary in the extremely small.",
    date: "May 15, 2023"
  },
  {
    id: 2,
    content: "Data isn't just numbers; it's the stories waiting to be discovered through rigorous analysis and creative visualization.",
    date: "April 3, 2023"
  },
  {
    id: 3,
    content: "At the intersection of chemistry and computation, we find solutions that neither field could discover alone.",
    date: "March 18, 2023"
  },
  {
    id: 4,
    content: "Scientific progress isn't just about discovering what's new, but about connecting what's known in novel ways.",
    date: "February 27, 2023"
  },
  {
    id: 5,
    content: "The most elegant code, like the most elegant science, achieves complexity of function with simplicity of design.",
    date: "January 10, 2023"
  },
  {
    id: 6,
    content: "Nanomaterials remind us that sometimes the smallest things can make the biggest impact.",
    date: "December 15, 2022"
  },
  {
    id: 7,
    content: "In research, our failures often teach us more than our successes. Every error is data pointing to a deeper understanding.",
    date: "November 28, 2022"
  },
  {
    id: 8,
    content: "The beauty of interdisciplinary work is in the translation – finding the common language between different fields of knowledge.",
    date: "October 5, 2022"
  }
];

const Blog: React.FC = () => {
  return (
    <PageLayout>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Short thoughts and reflections on science, technology, and research.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            {quotes.map(quote => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

interface Quote {
  id: number;
  content: string;
  date: string;
}

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="Avatar" />
            <AvatarFallback>PN</AvatarFallback>
          </Avatar>
          <div>
            <blockquote className="text-lg mb-2">"{quote.content}"</blockquote>
            <div className="text-sm text-muted-foreground">{quote.date}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Blog;
