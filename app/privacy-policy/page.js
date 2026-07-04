export const metadata = {
  title: "Privacy Policy | Maxx Waste Removals",

  description:
    "Read the Privacy Policy for Maxx Waste Removals and learn how we collect, use and protect your personal information.",

  openGraph: {
    title: "Privacy Policy | Maxx Waste Removals",
    description:
      "Read the Privacy Policy for Maxx Waste Removals and learn how we collect, use and protect your personal information.",
    url: "https://www.maxxwasteremovals.co.uk/privacy-policy",
    siteName: "Maxx Waste Removals",
    locale: "en_GB",
    type: "website",
  },

  alternates: {
    canonical: "https://www.maxxwasteremovals.co.uk/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-6">
        At <strong>Maxx Waste Removals</strong>, we are committed to protecting
        your privacy and handling your personal information responsibly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Information We Collect
      </h2>

      <p className="mb-6">
        We may collect your name, phone number, email address, property address,
        and any information you provide when requesting a quotation or booking
        our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        How We Use Your Information
      </h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Provide quotations and waste removal services.</li>
        <li>Respond to enquiries.</li>
        <li>Arrange collections.</li>
        <li>Improve our customer service.</li>
        <li>Meet legal and regulatory obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Sharing Your Information
      </h2>

      <p className="mb-6">
        We do not sell your personal information. Information may be shared with
        trusted service providers or authorities where required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>

      <p className="mb-6">
        We take reasonable measures to protect your personal information against
        unauthorised access, loss or misuse.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>

      <p>
        If you have any questions about this Privacy Policy, please contact
        Maxx Waste Removals through the contact details provided on our website.
      </p>
    </main>
  );
}