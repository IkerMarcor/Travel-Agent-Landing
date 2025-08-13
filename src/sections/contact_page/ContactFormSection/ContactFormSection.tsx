import { Form } from "@/components/Form";
import { useTranslation } from "react-i18next";

export const ContactFormSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#dbe8ec]">
      <div className="flex flex-col md:flex-row gap-10 container mx-auto">
        {/* Left side content */}
        <div className="flex flex-col justify-between w-full">

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