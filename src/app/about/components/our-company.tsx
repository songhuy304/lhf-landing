import { TitleHeading } from "@/components/title-section";
import { ContactInfo } from "@/data";
import { useTranslations } from "next-intl";

export default function OurCompany() {
  const t = useTranslations("AboutPage");
  const tMeta = useTranslations("Meta");
  const tLocation = useTranslations("Location");

  const companyData = [
    { label: tMeta("nameCompany"), content: tMeta("title") },
    { label: tMeta("boardOfDirectors"), content: tMeta("nameBoardofDirector") },
    {
      label: tLocation("hq"),
      content: `${tLocation("hqPostal")}\n${tLocation("hqAddress")}`,
    },
    {
      label: tLocation("branch"),
      content: (
        <>
          [{tLocation("hq")}] {tLocation("hqPostal")}
          <br />
          {tLocation("hqAddress")}
          <br />
          <br />[{tLocation("office")}] {tLocation("officePostal")}
          <br />
          {tLocation("officeAddress")}
          <br />
          <br />[{tLocation("salon")}] {tLocation("salonPostal")}
          <br />
          {tLocation("salonAddress")}
          <br />
          <br />[{tLocation("store")}] {tLocation("storePostal")}
          <br />
          {tLocation("storeAddress")}
        </>
      ),
    },
    {
      label: t("infoTitle"),
      content: (
        <>
          {t("phone")}: {ContactInfo.phone}
          <br />
          {t("fax")}: {ContactInfo.fax}
          <br />
          {t("website")}: {ContactInfo.website}
          <br />
          {t("email")}: {ContactInfo.email}
        </>
      ),
    },
    { label: t("capital"), content: t("capitalAmount") },
    {
      label: t("business.title"),
      content: (
        <ul className="list-disc pl-5 mt-2">
          <li>{t("business.bus1")}</li>
          <li>{t("business.bus2")}</li>
          <li>{t("business.bus3")}</li>
          <li>{t("business.bus4")}</li>
        </ul>
      ),
    },
    {
      label: t("registrationNumber.title"),
      content: (
        <>
          {t("registrationNumber.reg1")}
          <br />
          {t("registrationNumber.reg2")}
          <br />
          {t("registrationNumber.reg3")}
        </>
      ),
    },
    {
      label: t("memberOrganizations.title"),
      content: (
        <>
          {t("memberOrganizations.org1")}
          <br />
          {t("memberOrganizations.org2")}
        </>
      ),
    },
  ];

  return (
    <section
      id="company"
      className="relative overflow-hidden py-24 bg-navy-900"
    >
      <div className="container mx-auto px-4">
        <TitleHeading des={t("ourCompanyDes")}>
          {t("CompanyTitle")}
        </TitleHeading>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {companyData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 pr-8 md:pr-28 font-medium">
                      {item.label}
                    </td>
                    <td className="py-4">{item.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
