"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-semibold text-red-600">
        Something went wrong!
      </h2>

      <p className="text-gray-600">{error.message}</p>

      <button
        onClick={reset}
        className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
