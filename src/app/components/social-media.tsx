"use client";
import { TitleHeading } from "@/components/title-section";
import { Button } from "@/components/ui/button";
import { FacebookIcon, HotPepperIcon, LineIcon } from "@/components/ui/icon";
import { ContactInfo } from "@/data";
import { useTranslations } from "next-intl";

export default function SocialMedia() {
  const t = useTranslations("SocialMedia");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <TitleHeading des={t("title")} classNameDes="text-black">
          {t("title")}
        </TitleHeading>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            variant="outline"
            className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => window.open(ContactInfo.hotpepperUrl, "_blank")}
          >
            <HotPepperIcon size={20} />
            {t("followHotpepper")}
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
