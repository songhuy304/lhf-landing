"use client";
import { TitleHeading } from "@/components/title-section";
import { Button, Input, Textarea } from "@/components/ui";
import { ContactInfo } from "@/data";
import { Mail, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactUs() {
  const t = useTranslations("AboutPage");
  const homeT = useTranslations("HomePage");
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form data:", formData);
    // Here is where you would send data to the server

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    alert("Gửi thông tin thành công!");
  };

  // Create Google Maps URL with appropriate language

  return (
    <section id="contact" className="relative overflow-hidden py-12 md:py-24">
      <div className="container mx-auto px-4">
        <TitleHeading classNameDes="text-white" des={t("contactUsDes")}>
          {t("getInTouch")}
        </TitleHeading>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-gray-50 rounded-lg p-4">
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg w-full md:w-1/3 border">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <Input
                id="name"
                name="name"
                placeholder={t("placeholderName")}
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t("placeholderEmail")}
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Textarea
                id="message"
                name="message"
                placeholder={t("placeholderMessage")}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t("submitting") : t("sendMessage")}
              </Button>
            </form>

            <div className="mt-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-600">
                    {homeT("companyHoursValue")}: {ContactInfo.phone}
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a
                    href={`mailto:${ContactInfo.email}`}
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    {ContactInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[300px] md:h-auto w-full md:w-2/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.434818946459!2d136.80432657624627!3d35.32002244973104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003a7479939977b%3A0x172f178d957673cd!2z5pel5pys44CB44CSNDkxLTAwNzEg5oSb55-l55yM5LiA5a6u5biC6ZW35bO255S677yS5LiB55uu77yZIOODquODvOODgOODvOOCr-ODqeODs-ODhO-8me-8kw!5e0!3m2!1sja!2sus!4v1755917950582!5m2!1sja!2sus"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
