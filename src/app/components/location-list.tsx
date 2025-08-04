import { TitleHeading } from "@/components/title-section";
import { useTranslations } from "next-intl";
import { ContactInfo } from "@/data";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui";

export default function LocationsList() {
  const t = useTranslations("HomePage");
  const location = useTranslations("Location");
  return (
    <section id="Location" className=" relative pt-24">
      <div className="container mx-auto px-4">
        <TitleHeading des={t("locationListDes")}>
          {t("locationListTitle")}
        </TitleHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <LocationCard
            title={location("hq")}
            address={location("hqAddress")}
            postal={location("hqPostal")}
          />
          <LocationCard
            title={location("office")}
            address={location("officeAddress")}
            postal={location("officePostal")}
          />
          <LocationCard
            title={location("salon")}
            address={location("salonAddress")}
            postal={location("salonPostal")}
          />
          <LocationCard
            title={location("store")}
            address={location("storeAddress")}
            postal={location("storePostal")}
          />
        </div>
      </div>
    </section>
  );
}

function LocationCard({
  title,
  address,
  postal,
}: {
  title: string;
  address: string;
  postal: string;
}) {
  return (
    <div className="bg-white rounded-lg min-h-56 border p-6 transition-transform hover:scale-105">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-sm text-gray-500">{postal}</span>
      </div>
      <p className="text-gray-700 mb-3">{address}</p>
      <div className="flex items-start gap-3">
        <Phone className="text-gray-700 h-5 w-5 mt-1 flex-shrink-0" />
        <span>{ContactInfo.phone}</span>
      </div>
      <Button variant="outline" className="w-full">
        Xem trên Google Maps
      </Button>
    </div>
  );
}
