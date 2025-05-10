import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';

// Define multi-line content using backticks (template literals)
const quotes = [
  {
    id: 6,
    content: `Just as you cannot start building and inventing new physical laws without harmonizing with the scientific work done through millennials.

To the ‘modern progressist’: You cannot create new rules of collective behavior while disregarding the history and work of philosophers who long ago have already addressed extensively the questions you’re just beginning to wonder.`, // Example of multi-line
    date: "10 V 2025" // This string will be displayed directly
  },
  {
    id: 5,
    content: `Illusion is the proof of sense limitations.

Imagination is the proof of the mind’s unbounded spectrum.

As such, non-superficial questions require senseless (theoretical) thinking, or as God thinks, as Him a sentient being without organ of senses.`, // Another example
    date: "16 III 2025" // This string will be displayed directly
  },
  {
    id: 4,
    content: `If entropy is chaos, then love is the anti-entropy.

As love is the nature true order.`,
    date: "28 II 2025" // This string will be displayed directly
  },
  {
    id: 3,
    content: `Is God part of the Universe?
If yes, when the Universe will be destroyed (see “Heat death”), will also the God destroyed?

If not, how do we communicate with the outer Universe?

There is a slight chance that the questions are intentionally wrong.`,
    date: "26 II 2025" // This string will be displayed directly
  },
  {
    id: 2,
    content: `Considering the true event itself as an independent constant without a unit.

The narrative about the event may have only binary results (tending towards true/false) with time as the unit.

a) a recent narrative about an event, even if it is absolutely true, is not as reliable as an older narrative that has stayed true over time. (“some infinities are bigger than others” Cantor)

b) using this scale of measurement, religious scriptures, and other philosophical teachings become more relevant in daily life as their mystical elements diminish.`,
    date: "31 VIII 2024" // This string will be displayed directly
  },
  {
    id: 1,
    content: `Whenever truth is discussed, relativity is used as a counterargument for the existence of an achievable objective truth.

Using relativity as an argument is just an acceptance of our weak logical detectors by attempting to consider error as a sense limitation. Not only that, but there is also the practical inability to think senselessly theoretically.`, // Another example
    date: "31 VII 2024" // This string will be displayed directly
  }
];

const Blog: React.FC = () => {
  return (
    <PageLayout>
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background elements (same as Publications/Projects page) */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/4 w-1/5 h-1/5 bg-red-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent pb-2">
              thoughts & reflections
            </h1>
             <p className="text-lg text-muted-foreground backdrop-blur-sm bg-background/30 p-3 rounded-lg inline-block">
             nonchalant things I think, but I might change my mind
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 md:gap-10">
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
  date: string; // date is correctly typed as string
}

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  // Removed the formatDate function

  return (
    <Card  className="border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 backdrop-blur-sm bg-background/40 h-full transform group-hover:translate-y-[-5px] flex flex-col">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1">
            {/* Icon or Avatar placeholder */}
          </div>
          <div className="flex-1">
            {/* whitespace-pre-wrap kept for multi-line content */}
            <blockquote className="text-lg md:text-xl font-medium text-foreground/90 mb-3 italic leading-relaxed whitespace-pre-wrap">
              “{quote.content}”
            </blockquote>
            {/* Displaying quote.date string directly */}
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {quote.date}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Blog;