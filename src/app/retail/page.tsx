import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "../components/header";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Root");
  return {
    title: `${t("retail")} | Fermy`,
    description: "Retail solutions offered by Fermy",
  };
}

export default async function RetailPage() {
  const t = await getTranslations("Root");

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Retail Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 font-serif">
            {t("retail")}
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center text-gray-600 mb-8">
              Our retail solutions help businesses optimize their operations and
              enhance customer experiences.
            </p>

            {/* Placeholder content - replace with actual content */}
            <div className="bg-gray-100 p-12 rounded-lg text-center">
              <p className="text-xl font-medium">Retail content coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
