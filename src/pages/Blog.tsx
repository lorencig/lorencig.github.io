import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Pin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define multi-line content using backticks (template literals)
const quotes = [
  {
    id: 9,
    content: `On the pavlovian scale, researchers rank on top of it. Never seen more copy behavior in any other group of people.`,
    date: "27 III 2026"
  },
  {
    id: 8,
    title: "Did science create the university, or did the university create science?",
    content: `The fall of Archaic Science. Autonomous labs. Decentralised science. Blockchain Book of Thoth. The rise of the Thought Artist.`,
    date: "14 III 2026",
    essaySlug: "desci"
  },
  {
    id: 7,
    content: `While thinking about the theoretical atom, the basic unsplittable unit of matter, one must at some point think about energy.

But energy itself, as a deposit, does it make any sense!? Or is it the dynamics of energy change that truly makes sense? A big stock of energy would amount to nothing if it stayed stationary.

Now, I cannot decide if the flow of energy makes any sense at all without time.`,
    date: "5 III 2026"
  },
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
  title?: string;
  content: string;
  date: string; // date is correctly typed as string
  essaySlug?: string;
}

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  const isEssay = Boolean(quote.essaySlug);

  return (
    <Card
      className={cn(
        'rounded-lg overflow-hidden transition-all duration-300 backdrop-blur-sm h-full transform hover:-translate-y-[5px] flex flex-col relative',
        isEssay
          ? 'border border-[#F33C04]/35 shadow-md shadow-[#F33C04]/[0.12] hover:shadow-lg hover:shadow-[#F33C04]/20 hover:border-[#F33C04]/50 ring-1 ring-[#F33C04]/15 bg-gradient-to-br from-[#F33C04]/[0.09] via-background/75 to-[#A10100]/[0.08]'
          : 'border border-white/10 hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 bg-background/40'
      )}
    >
      {isEssay && (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-60 dark:opacity-45"
            aria-hidden
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgb(243 60 4 / 0.14) 1px, transparent 0)',
              backgroundSize: '22px 22px',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.35] dark:opacity-25 mix-blend-overlay"
            aria-hidden
            style={{
              backgroundImage:
                'linear-gradient(135deg, transparent 40%, rgb(161 1 0 / 0.06) 40%, rgb(161 1 0 / 0.06) 42%, transparent 42%, transparent 58%, rgb(243 60 4 / 0.05) 58%, rgb(243 60 4 / 0.05) 60%, transparent 60%)',
              backgroundSize: '18px 18px',
            }}
          />
          <div
            className="absolute top-4 right-4 md:top-5 md:right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#F33C04]/25 bg-background/80 text-[#F33C04] shadow-sm backdrop-blur-sm"
            aria-hidden
          >
            <Pin className="h-4 w-4" strokeWidth={2.25} />
          </div>
        </>
      )}

      <CardContent className={cn('p-6 md:p-8 relative z-10', isEssay && 'pt-10 md:pt-11')}>
        <div className="flex items-start">
          <div className="flex-1 min-w-0 pr-10 md:pr-12">
            {quote.title && (
              <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-snug">
                {quote.essaySlug ? (
                  <Link
                    to={`/essays/${quote.essaySlug}`}
                    className="hover:text-[#F33C04] transition-colors"
                  >
                    {quote.title}
                  </Link>
                ) : (
                  quote.title
                )}
              </h3>
            )}
            <blockquote className="text-lg md:text-xl font-medium text-foreground/90 mb-3 italic leading-relaxed whitespace-pre-wrap">
              “{quote.content}”
            </blockquote>
            {quote.essaySlug && (
              <div className="mb-3">
                <Link
                  to={`/essays/${quote.essaySlug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F33C04] hover:underline group/link"
                >
                  Read full essay
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            )}
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