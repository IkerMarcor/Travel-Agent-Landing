import { Form } from "@/components/Form";
import Title from "@/components/Title";
import { Trans, useTranslation } from "react-i18next";

export const ContactFormSection = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#dbe8ec]">
      <div className="flex flex-col md:flex-row gap-10 container mx-auto">
        {/* Left side content */}
        <div className="flex flex-col justify-between w-full">
          <Title>
            <Trans i18nKey="section.contact-us.title">
              Just Tell us <span className="italic font-semibold">When</span>{" "}
              <br />
              and <span className="italic font-semibold">Where.</span>
            </Trans>
          </Title>

          <p className="text-base font-medium text-[#585858] leading-6 max-w-[526px]">
            {t("section.contact-us.description")}
          </p>
        </div>

        {/* Right side form */}
        <Form />
      </div>
    </section>
  );
};
