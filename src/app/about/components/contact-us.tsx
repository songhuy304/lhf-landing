"use client";
import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import { Button, Input, Textarea } from "@/components/ui";
import { useState } from "react";

export default function ContactUs() {
  const t = useTranslations("AboutPage");
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

    // Giả lập gửi form
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form data:", formData);
    // Đây là nơi bạn sẽ gửi dữ liệu đến server

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    alert("Gửi thông tin thành công!");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4 ">
        <TitleHeading des={t("contactUsDes")}>{t("getInTouch")}</TitleHeading>

        <div className="flex gap-8">
          <div className="bg-gray-50 p-8 rounded-lg w-1/3 border">
            <form onSubmit={handleSubmit} className="space-y-6">
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
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[450px] w-2/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3253162668473!2d106.69941021471854!3d10.78081369231386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3a5d0cc72!2sNguy%E1%BB%85n%20Hu%E1%BB%87%20Walking%20Street!5e0!3m2!1sen!2s!4v1653825753874!5m2!1sen!2s"
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
