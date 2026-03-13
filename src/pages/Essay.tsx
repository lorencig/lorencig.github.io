import React from "react";
import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { essays } from "@/data/essays";

const Essay: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const essay = essays.find((item) => item.slug === slug);
  const [pageIndex, setPageIndex] = React.useState(0);

  React.useEffect(() => {
    setPageIndex(0);
  }, [slug]);

  if (!essay) {
    return (
      <PageLayout>
        <section className="py-20 container px-4 md:px-6 mx-auto">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Essay not found</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This essay does not exist yet.
              </p>
              <Button asChild variant="outline">
                <Link to="/blog">Back to thoughts</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </PageLayout>
    );
  }

  const totalPages = essay.pages.length;
  const isFirstPage = pageIndex === 0;
  const isLastPage = pageIndex === totalPages - 1;

  return (
    <PageLayout>
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
              {essay.date}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent pb-2">
              {essay.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">{essay.subtitle}</p>

            <Card className="border border-white/10 rounded-lg backdrop-blur-sm bg-background/40">
              <CardContent className="p-6 md:p-8">
                <div className="prose prose-invert max-w-none">
                  <div
                    className="text-base md:text-lg leading-relaxed whitespace-pre-wrap text-justify text-foreground/90"
                    dangerouslySetInnerHTML={{ __html: essay.pages[pageIndex] }}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex items-center justify-between">
              <Button
                className="min-w-[120px]"
                variant="outline"
                disabled={isFirstPage}
                onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {pageIndex + 1} / {totalPages}
              </span>
              <Button
                className="min-w-[120px]"
                disabled={isLastPage}
                onClick={() =>
                  setPageIndex((prev) => Math.min(prev + 1, totalPages - 1))
                }
              >
                Next
              </Button>
            </div>

            <div className="mt-8">
              <Button asChild variant="ghost">
                <Link to="/blog">Back to thoughts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Essay;
