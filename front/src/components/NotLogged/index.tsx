import Link from "next/link";

export default function NotLogged() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <div className="relative">
          <BanIcon className="mx-auto h-16 w-16 text-red-500" />
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-violet sm:text-4xl">
          Restricted Access
        </h1>
        <p className="mt-4 text-muted-foreground">
        You must be logged in to access to this content.
        </p>
        <div className="mt-6">
          <Link
            href="/login"
            className="inline-flex items-center rounded-md bg-violet bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Log in
          </Link>
        </div>
        <div className="mt-4">
          <Link
            href="/register"
            className="inline-flex items-center rounded-md border border-input px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

function BanIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m4.9 4.9 14.2 14.2" />
    </svg>
  );
}
