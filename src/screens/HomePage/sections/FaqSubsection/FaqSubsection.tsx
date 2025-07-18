import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqSubsection = (): JSX.Element => {
  const faqItems = [
    {
      question: "1. What services do you offer?",
      answer:
        "Majestic Travel offers travel planning, flight and hotel bookings, guided tours, and travel insurance for individuals and groups.",
    },
    {
      question: "2. How can I book a trip?",
      answer: "",
    },
    {
      question: "3. Can I customize my itinerary?",
      answer: "",
    },
    {
      question: "4. What is your cancellation policy?",
      answer: "",
    },
    {
      question: "5. Do you offer travel insurance?",
      answer: "",
    },
    {
      question: "6. How do I stay updated on travel advisories?",
      answer: "",
    },
    {
      question: "7. What payment methods do you accept?",
      answer: "",
    },
  ];

  return (
    <section className="flex-col md:flex-row gap-8 container mx-auto">
      <div className="md:w-1/3">
        <h2 className="text-5xl text-[#2e2e2e] font-normal mb-8">
          <span className="font-normal">Frequently Asked </span>
          <span className="font-['jsMath-cmmi10-Regular',Helvetica]">
            Questions
          </span>
        </h2>

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
