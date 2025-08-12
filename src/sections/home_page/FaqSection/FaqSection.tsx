import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Title from "@/components/Title";
import { Trans, useTranslation } from "react-i18next";

type AccordionItem = {
  question: string;
  answer: string;
};

export const FaqSection = (): JSX.Element => {
  const { t } = useTranslation();

  const faqItems =
    (t("section.faq.accordion", {
      returnObjects: true,
    }) as AccordionItem[]) ?? [];

  return (
    <section className="flex-col md:flex-row gap-8 container mx-auto">
      <div className="md:w-1/3">
        <Title>
          <Trans i18nKey="section.faq.title">
            Frequently Asked{" "}
            <span className="italic font-semibold">Questions</span>
          </Trans>
        </Title>

        <p className="text-base text-[#585858] font-medium leading-6">
          {t("section.faq.description")}
        </p>
      </div>

      <div className="md:w-2/3 w-full">
        <div className="space-y-2.5">
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: "#dbe8ec",
                borderRadius: "8px !important",
                border: "none",
                "&:before": {
                  display: "none",
                },
                boxShadow: "none",
                "&.Mui-expanded": {
                  margin: "8px 0",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  padding: "24px",
                  "& .MuiAccordionSummary-content": {
                    margin: "0",
                  },
                }}
              >
                <span className="font-normal text-base text-[#2e2e2e]">
                  {item.question}
                </span>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "0 24px 24px 24px",
                }}
              >
                <p className="font-medium text-base text-[#585858] leading-6">
                  {item.answer}
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};
