import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export const Form = () => {
  const { t } = useTranslation();

  const packages =
    (t("section.packages.cards", { returnObjects: true }) as {
      name: string;
    }[]) ?? [];

  const packagesAvailable = packages.map((pkg) => pkg.name);

  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_cuewwg9",
        "template_dy3f4y8",
        form.current,
        "mVwrjIxyfS2gvU_3b"
      )
      .then(
        () => {
          alert("Message has been sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="md:w-1/2 space-y-4 mt-8 md:mt-0"
    >
      <div className="bg-white rounded-xl shadow-md p-4">
        <label
          htmlFor="customer_name"
          className="block text-gray-700 font-semibold"
        >
          {t("section.contact-us.form-labels.name")}
        </label>
        <input
          type="text"
          name="customer_name"
          placeholder="Emily Chan"
          className="w-full mt-1 border-none outline-none"
          required
        />
      </div>

      <div className="bg-white rounded-xl shadow-md p-4">
        <label
          htmlFor="customer_email"
          className="block text-gray-700 font-semibold"
        >
          {t("section.contact-us.form-labels.email")}
        </label>
        <input
          type="email"
          name="customer_email"
          placeholder="emily@chan.com"
          className="w-full mt-1 border-none outline-none"
          required
        />
      </div>

      <div className="bg-white rounded-xl shadow-md p-4">
        <label
          htmlFor="tour_package"
          className="block text-gray-700 font-semibold"
        >
          {t("section.contact-us.form-labels.package")}
        </label>
        <select
          name="tour_package"
          id="tour_package"
          className="w-full mt-1 border-none outline-none bg-white"
          required
        >
          {packagesAvailable.map((packageName) => (
            <option key={packageName} value={packageName}>
              {packageName}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4">
        <label
          htmlFor="start_date"
          className="block text-gray-700 font-semibold"
        >
          {t("section.contact-us.form-labels.start-date")}
        </label>
        <input
          type="date"
          name="start_date"
          className="w-full mt-1 border-none outline-none"
          required
        />
      </div>

      <div className="bg-white rounded-xl shadow-md p-4">
        <label htmlFor="end_date" className="block text-gray-700 font-semibold">
          {t("section.contact-us.form-labels.end-date")}
        </label>
        <input
          type="date"
          name="end_date"
          className="w-full mt-1 border-none outline-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="bg-[#aacfd8] w-full py-2 rounded shadow text-gray-800 font-semibold hover:bg-[#92bcc9] transition"
      >
        {isSending
          ? t("section.contact-us.submitting")
          : t("section.contact-us.submit")}
      </button>
    </form>
  );
};
