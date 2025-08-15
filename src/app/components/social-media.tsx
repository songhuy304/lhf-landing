"use client";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, LineIcon } from "@/components/ui/icon";
import { useTranslations } from "next-intl";
import { ContactInfo } from "@/data";

export default function SocialMedia() {
  const t = useTranslations("SocialMedia");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {t("title")}
        </h2>
        <p className="text-xl text-gray-600 mb-8">{t("description")}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => window.open(ContactInfo.instagramUrl, "_blank")}
          >
            <InstagramIcon size={20} />
            {t("followInstagram")}
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => window.open(ContactInfo.facebookUrl, "_blank")}
          >
            <FacebookIcon size={20} />
            {t("followFacebook")}
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => window.open(ContactInfo.lineUrl, "_blank")}
          >
            <LineIcon size={20} className="fill-current" />
            {t("followLine")}
          </Button>
        </div>
      </div>
    </section>
  );
}
