export const metadata = {
  title: "Terms & Conditions | Maxx Waste Removals",

  description:
    "Read the Terms & Conditions for using the services provided by Maxx Waste Removals.",

  openGraph: {
    title: "Terms & Conditions | Maxx Waste Removals",
    description:
      "Read the Terms & Conditions for using the services provided by Maxx Waste Removals.",
    url: "https://www.maxxwasteremovals.co.uk/terms",
    siteName: "Maxx Waste Removals",
    locale: "en_GB",
    type: "website",
  },

  alternates: {
    canonical: "https://www.maxxwasteremovals.co.uk/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

      <p className="mb-6">
        By booking a service with Maxx Waste Removals, you agree to the
        following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Bookings</h2>

      <p className="mb-6">
        All quotations are based on the information provided at the time of the
        enquiry. Prices may change if the volume or type of waste differs on
        arrival.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Payments</h2>

      <p className="mb-6">
        Payment is due as agreed at the time of booking unless otherwise
        arranged.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Customer Responsibilities</h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Ensure safe access to the property.</li>
        <li>Declare any hazardous or restricted waste.</li>
        <li>
          Ensure all items presented for collection belong to you or you have
          permission to dispose of them.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Waste Disposal</h2>

      <p className="mb-6">
        Maxx Waste Removals is committed to disposing of waste responsibly and
        recycling wherever possible in accordance with applicable regulations.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Liability</h2>

      <p className="mb-6">
        We will exercise reasonable care when providing our services but shall
        not be liable for delays or circumstances beyond our reasonable control.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>

      <p>
        If you have any questions regarding these Terms & Conditions, please
        contact Maxx Waste Removals using the contact details on our website.
      </p>
    </main>
  );
}