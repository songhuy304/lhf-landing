"use client";
import { TitleHeading } from "@/components/title-section";
import { Button } from "@/components/ui/button";
import { FacebookIcon, HotPepperIcon, LineIcon } from "@/components/ui/icon";
import { SocialButton } from "@/components/ui/social-buttons";
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
          <SocialButton platform="hotpepper" size="md" />
          <SocialButton platform="facebook" size="md" />
          <SocialButton platform="instagram" size="md" />
        </div>
      </div>
    </section>
  );
}
