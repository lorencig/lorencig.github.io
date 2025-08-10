import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export interface CVItem {
  id: string;
  title: string;
  org?: string;
  period?: string;
  location?: string;
  tags?: string[];
  details: ReactNode;
}

interface CVSectionProps {
  id: string;
  title: string;
  items: CVItem[];
}

export const CVSection = ({ id, title, items }: CVSectionProps) => {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="space-y-3 md:space-y-4">
      <header>
        <h2 id={`${id}-title`} className="text-lg md:text-xl font-semibold tracking-wide text-muted-foreground">
          {title}
        </h2>
      </header>

      <Accordion type="multiple" className="space-y-2 md:space-y-3">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 backdrop-blur-sm bg-background/40"
          >
            <AccordionTrigger className="px-3 md:px-5 py-3 md:py-4 no-underline hover:no-underline">
              <div className="flex w-full items-center justify-between gap-2 md:gap-4">
                <div className="text-left flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm md:text-base">{item.title}</p>
                  {(item.org || item.location) && (
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {[item.org, item.location].filter(Boolean).join(" • ")}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                  {item.tags?.slice(0, 3).map((t) => (
                    <Badge key={t} variant="secondary" className="uppercase tracking-wide hidden md:inline-flex">
                      {t}
                    </Badge>
                  ))}
                  {item.period && (
                    <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline-block">
                      {item.period}
                    </span>
                  )}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-3 md:px-5 pb-3 md:pb-5 text-xs md:text-sm text-muted-foreground">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {item.details}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
