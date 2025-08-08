import { TitleHeading } from "@/components/title-section";
import { ContactInfo } from "@/data";
import { useTranslations } from "next-intl";

export default function OurCompany() {
  const t = useTranslations("AboutPage");
  const tMeta = useTranslations("Meta");
  const tLocation = useTranslations("Location");
  return (
    <section
      id="company"
      className="relative overflow-hidden py-24 bg-navy-900"
    >
      <div className="container mx-auto px-4">
        <TitleHeading>{t("CompanyTitle")}</TitleHeading>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="py-4 pr-8 font-medium text-black">
                    {tMeta("nameCompany")}
                  </td>
                  <td className="py-4">{tMeta("title")}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-8 font-medium">
                    {tMeta("boardOfDirectors")}
                  </td>
                  <td className="py-4">TRẦN VĂN LONG</td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 pr-8 font-medium">{tLocation("hq")}</td>
                  <td className="py-4">{tLocation("hqAddress")}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-8 font-medium">
                    {tLocation("branch")}
                  </td>
                  <td className="py-4">
                    [{tLocation("office")}]: {tLocation("officeAddress")}
                    <br />[{tLocation("salon")}]: {tLocation("salonAddress")}
                    <br />[{tLocation("store")}]: {tLocation("storeAddress")}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 pr-8 font-medium">{t("infoTitle")}</td>
                  <td className="py-4">
                    {t("phone")}: {ContactInfo.phone}
                    <br />
                    {t("email")}: {ContactInfo.email}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-8 font-medium">{t("capital")}</td>
                  <td className="py-4">{t("capitalAmount")}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-8 font-medium">
                    {t("business.title")}
                  </td>
                  <td className="py-4">
                    <ul className="list-disc pl-5 mt-2">
                      <li>{t("business.bus1")}</li>
                      <li>{t("business.bus2")}</li>
                      <li>{t("business.bus3")}</li>
                      <li>{t("business.bus4")}</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-8 font-medium">
                    {t("registrationNumber.title")}
                  </td>
                  <td className="py-4">
                    {t("registrationNumber.reg1")}
                    <br />
                    {t("registrationNumber.reg2")}
                    <br />
                    {t("registrationNumber.reg3")}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 pr-8 font-medium">
                    {t("memberOrganizations.title")}
                  </td>
                  <td className="py-4">
                    {t("memberOrganizations.org1")}
                    <br />
                    {t("memberOrganizations.org2")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
