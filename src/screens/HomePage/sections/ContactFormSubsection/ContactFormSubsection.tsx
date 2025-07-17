import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const ContactFormSubsection = (): JSX.Element => {
  // Form field data
  const formFields = [
    {
      label: "Your Name",
      value: "Emily Chen",
      labelClassName: "font-medium",
    },
    {
      label: "Tour Package",
      value: "Thailand - Bangkok",
      labelClassName: "font-medium",
    },
    {
      label: "Starting Date",
      value: "23 Jan, 2024",
      labelClassName: "font-normal",
    },
    {
      label: "End Date",
      value: "23 Fab, 2024",
      labelClassName: "font-normal",
    },
  ];

  return (
    <section className="bg-[#dbe8ec]">
      <div className="flex flex-row gap-10 container mx-auto h-[600px]">
        {/* Left side content */}
        <div className="flex flex-col justify-between w-1/2">
          <h2 className="text-[64px] text-[#2e2e2e] leading-tight">
            <span className="font-normal">Just Tell us </span>
            <span className="[font-family:'jsMath-cmti10-Regular',Helvetica] italic">
              When
            </span>
            <span className="font-normal"> and </span>
            <span className="[font-family:'jsMath-cmti10-Regular',Helvetica] italic">
              Where
            </span>
            <span className="font-normal">.</span>
          </h2>

          <p className="text-base font-medium text-[#585858] leading-6 max-w-[526px]">
            Simply let us know your desired destination and travel dates, and
            we'll take care of the rest. At Tour Travel, we make booking your
            next adventure effortless.
          </p>
        </div>

        {/* Right side form */}
        <div className="flex flex-col w-1/2 justify-between">

          {/* Form fields */}
          <div className="flex flex-col gap-2">
            {formFields.map((field, index) => (
              <Card key={index} className="bg-white rounded-2xl">
                <CardContent className="flex flex-col items-start pl-6 pr-4 py-[27px]">
                  <div
                    className={`w-full text-[#2e2e2e] text-${index < 2 ? "lg" : "base"} ${field.labelClassName}`}
                  >
                    {field.label}
                  </div>
                  <div className="w-full font-medium text-[#2e2e2e99] text-base">
                    {field.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Send button */}
          <Button className="bg-[#b9d4db] text-[#2e2e2e] font-medium text-base px-[47px] py-[13px] rounded hover:bg-[#a8c7d0]">
            Send
          </Button>
        </div>
      </div>
    </section>
  );
};
