"use client";
import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import { Button, Input, Textarea } from "@/components/ui";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { ContactInfo } from "@/data";

export default function ContactUs() {
  const t = useTranslations("AboutPage");
  const homeT = useTranslations("HomePage");
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

  return (
    <section id="contact" className="relative overflow-hidden py-12 md:py-24">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("contactUsDes")}>{t("getInTouch")}</TitleHeading>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
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
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[300px] md:h-[450px] w-full md:w-2/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1140384262486!2d136.7954053!3d35.1763455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003a0c1b8f65555%3A0x2d9d5f0a8c5d4c1b!2s2-ch%C5%8Dme-9%20Nagashimach%C5%8D%2C%20Ichinomiya%2C%20Aichi%20491-0071%2C%20Japan!5e0!3m2!1sen!2s!4v1653825753874!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
