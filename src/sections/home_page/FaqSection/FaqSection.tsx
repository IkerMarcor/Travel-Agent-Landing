import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Title from "@/components/Title";
import { faqItems } from "@/data/faqItems";

export const FaqSection = (): JSX.Element => {

  return (
    <section className="flex-col md:flex-row gap-8 container mx-auto">
      <div className="md:w-1/3">
        <Title>
          Frequently Asked{" "}
          <span className="italic font-semibold">Questions</span>
        </Title>

        <p className="text-base text-[#585858] font-medium leading-6">
          Find answers to common inquiries about Tour Travel&#39;s services,
          booking process, and more. Explore our FAQ section to get the
          information you need for a smooth and enjoyable travel experience.
        </p>
      </div>

      <div className="md:w-2/3 w-full">
        <Accordion type="single" collapsible className="space-y-2.5">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#dbe8ec] rounded-lg p-6 border-none"
            >
              <AccordionTrigger className="flex justify-between">
                <span className="font-normal text-base text-[#2e2e2e]">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-3">
                <p className="font-medium text-base text-[#585858] leading-6">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
