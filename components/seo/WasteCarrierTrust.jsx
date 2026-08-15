export default function WasteCarrierTrust({ city }) {
  return (
    <section className="bg-[#07152f] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-[#0b1d3d] p-6 shadow-sm md:p-10">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#f6be00]/40 bg-[#f6be00]/10 text-2xl font-bold text-[#f6be00]">
                ✓
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Fully Licensed Waste Carrier in {city}
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-300">
                Maxx Waste Removals is a registered waste carrier with the
                Environment Agency, providing professional waste collection and
                transportation services in {city} and surrounding areas.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl rounded-xl border border-white/10 bg-[#07152f] p-6 text-center">
              <h3 className="text-xl font-bold text-white">
                Environment Agency Waste Carrier Registration
              </h3>

              <p className="mt-5 text-sm font-medium uppercase tracking-wide text-gray-400">
                Registration Number
              </p>

              <p className="mt-1 text-2xl font-bold tracking-wide text-white">
                CBDU643399
              </p>

              <p className="mt-2 font-semibold text-gray-300">
                Upper Tier – Carrier Dealer
              </p>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
                Our registration provides customers with an additional way to
                verify that their waste is being collected and transported by
                a registered waste carrier.
              </p>

              <div className="mt-6">
                <a
                  href="https://environment.data.gov.uk/public-register/waste-carriers-brokers/registration/CBDU643399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#f6be00] px-6 py-3 font-semibold text-[#07152f] shadow-sm transition hover:bg-[#ffd23f]"
                >
                  Verify Waste Carrier Registration
                </a>
              </div>

              <p className="mt-3 text-center text-xs leading-5 text-gray-400">
                The link opens the official Environment Agency public register
                where the registration can be verified using CBDU643399.
              </p>
            </div>

            <p className="mt-6 text-center leading-7 text-gray-300">
              We aim to make waste removal straightforward, from arranging your
              collection to loading and removing the waste from your property.
              We can also help with responsible disposal of collected waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}