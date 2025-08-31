import { TitleHeading } from "@/components/title-section";
import { Button } from "@/components/ui";
import Chip from "@/components/ui/chip";
import { ContactInfo } from "@/data";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LocationsList() {
  const t = useTranslations("HomePage");
  const location = useTranslations("Location");
  return (
    <section id="location" className="relative pt-24">
      <div className="container mx-auto px-4">
        <TitleHeading classNameDes="text-white" des={t("locationListDes")}>
          {t("locationListTitle")}
        </TitleHeading>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <LocationItem
            type={location("tagHQ")}
            title={location("hqAddress")}
            postalCode={location("hqPostal")}
            mapUrl={ContactInfo.mapUrlHQ}
          />
          <LocationItem
            type={location("tagOffice")}
            title={location("officeAddress")}
            postalCode={location("officePostal")}
            mapUrl={ContactInfo.mapUrlOffice}
          />
          <LocationItem
            type={location("tagSalon")}
            title={location("salonAddress")}
            postalCode={location("salonPostal")}
            mapUrl={ContactInfo.mapUrlSalon}
          />
          <LocationItem
            type={location("tagStore")}
            title={location("storeAddress")}
            postalCode={location("storePostal")}
            mapUrl={ContactInfo.mapUrlStore}
          />
        </div>
      </div>
    </section>
  );
}

interface LocationItemProps {
  type: string;
  title: string;
  postalCode: string;
  mapUrl: string;
}

const LocationItem = ({ type, title, mapUrl }: LocationItemProps) => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full h-full bg-gray-50 rounded-md p-4 flex flex-col">
      <Chip label={type} />
      <h3 className="text-base font-medium mt-3">{title}</h3>

      <div className="mt-auto pt-5">
        <a href={mapUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full">
            <MapPin className="mr-2 h-4 w-4" />
            {t("viewOnMap")}
          </Button>
        </a>
      </div>
    </div>
  );
};
