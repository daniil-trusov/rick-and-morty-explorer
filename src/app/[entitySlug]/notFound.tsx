import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-12 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-red-600 mb-4">
        Character not found
      </h1>

      <p className="text-gray-700 mb-6 max-w-md">
        Sorry, but such character doesn&apos;t exist within Rick and Morty API
      </p>

      <div className="flex gap-4">
        <Link
          href={"/"}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
