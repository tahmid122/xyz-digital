import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-lg text-center">
        <p className="text-8xl font-bold tracking-tight text-primary/10">404</p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or no longer exists.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
