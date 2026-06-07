import Link from "next/link";

export default function ServiceCard({ icon, title, description, link }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:scale-[1.02] hover:border-yellow-400/40">

      {/* ICON */}
      <div className="mb-4 text-yellow-400">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-gray-300 text-sm leading-relaxed">
        {description}
      </p>

      {/* SEO LINK CTA */}
      {link && (
        <div className="mt-5">
          <Link
            href={link}
            className="text-yellow-400 text-sm font-semibold hover:underline"
          >
            Learn more →
          </Link>
        </div>
      )}

    </div>
  );
}