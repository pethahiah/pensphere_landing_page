import NewLanding from "@/Landing/NewLanding";
import { site } from "@/data/site";
import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata("/", null);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.company.legalName,
      url: site.url,
      logo: site.logo,
      email: site.company.email,
      telephone: site.company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.company.streetAddress,
        addressLocality: site.company.locality,
        addressRegion: site.company.region,
        addressCountry: site.company.country,
      },
    },
    {
      "@type": "FinancialService",
      "@id": `${site.url}/#service`,
      name: site.name,
      alternateName: site.formerName,
      description: site.description,
      url: site.url,
      image: site.ogImage,
      logo: site.logo,
      email: site.company.email,
      telephone: site.company.phone,
      areaServed: { "@type": "Country", name: "Nigeria" },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.company.streetAddress,
        addressLocality: site.company.locality,
        addressRegion: site.company.region,
        addressCountry: site.company.country,
      },
      provider: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <NewLanding />
    </>
  );
}
