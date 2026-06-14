export default function WasteCarrierBadge() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white rounded-[40px] shadow-xl max-w-xl mx-auto mb-16 border border-gray-50">
      {/* Larger, more prominent logo */}
      <div className="w-full max-w-[380px] mb-6">
        <img
          src="/logos/waste-carrier-license.webp"
          alt="Environment Agency Registered Waste Carrier"
          className="w-full h-auto object-contain"
        />
      </div>
      
      {/* Refined, smaller text */}
      <p className="text-sm text-gray-500 text-center font-medium leading-relaxed max-w-sm">
        MAXX Waste Removals is a <span className="text-green-600 font-bold">Fully Licensed & Certified Waste Carrier</span> registered with the Environment Agency.
      </p>
    </div>
  );
}
