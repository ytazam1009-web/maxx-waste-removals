import Link from "next/link";

export default function PrimaryButton({
  href,
  children,
}) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      justify-center
      rounded-xl
      bg-yellow-400
      px-6
      py-3
      font-semibold
      text-black
      transition
      hover:scale-105
      "
    >
      {children}
    </Link>
  );
}