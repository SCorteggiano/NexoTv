import Link from "next/link"

export default function NotLogged() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-md text-center">
    <div className="mx-auto h-12 w-12 text-primary" />
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-violet sm:text-4xl">Restricted Access</h1>
    <p className="mt-4 text-muted-foreground">You must be logged in to access the dashboard.</p>
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
        href="Register"
        className="inline-flex items-center rounded-md border border-input px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        prefetch={false}
      >
        Register
      </Link>
    </div>
  </div>
</div>

  )
}