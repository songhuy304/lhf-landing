import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "../components/header";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Root");
  return {
    title: `${t("about")} | Fermy`,
    description: "Company information and contact details",
  };
}

export default async function AboutPage() {
  const t = await getTranslations("Root");

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Company Information Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 font-serif">
            {t("companyInfo")}
          </h1>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/placeholder-logo.svg"
                  alt="Fermy Company"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Fermy Co., Ltd.</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 font-medium">Address:</p>
                    <p>123 Business Street, Tokyo, Japan</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Established:</p>
                    <p>2020</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Business Areas:</p>
                    <ul className="list-disc pl-5">
                      <li>Recruitment Services</li>
                      <li>Retail Solutions</li>
                      <li>Nail Services</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Mission:</p>
                    <p>
                      To provide exceptional services that enhance people's
                      lives and businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif">
            {t("contact")}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
