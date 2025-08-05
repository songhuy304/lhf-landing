import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
export default function ContactUs() {
  const t = useTranslations("AboutPage");
  return (
    <section id="contact" className="bg-gray-50 relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("contactUsDes")}>LHF</TitleHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Thông tin liên hệ */}

          {/* Google Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px]">
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
