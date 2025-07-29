import { Form } from "../../../../components/Form";
import Title from "../../../../components/Title";

export const ContactFormSection = (): JSX.Element => {
  return (
    <section className="bg-[#dbe8ec]">
      <div className="flex flex-col md:flex-row gap-10 container mx-auto">
        {/* Left side content */}
        <div className="flex flex-col justify-between w-full">
          <Title>
            Just Tell us <span className="italic font-semibold">When</span>{" "}
            <br />
            and <span className="italic font-semibold">Where.</span>
          </Title>

          <p className="text-base font-medium text-[#585858] leading-6 max-w-[526px]">
            Simply let us know your desired destination and travel dates, and
            we'll take care of the rest. At Tour Travel, we make booking your
            next adventure effortless.
          </p>
        </div>

        {/* Right side form */}
        <Form />
      </div>
    </section>
  );
};
