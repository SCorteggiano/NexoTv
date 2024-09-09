import Link from "next/link"

export default function NotAuthorized() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <LockIcon className="mx-auto h-12 w-12  text-red-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-violet sm:text-4xl">Unauthorized</h1>
        <p className="mt-4 text-muted-foreground">
        Sorry, you dont have access to this page. Please return to the home page.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-violet px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
