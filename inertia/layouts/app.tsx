import { Link } from '@inertiajs/react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <section id="logo">
          <Link href="/">
            <img
              src="/images/unlock-logo.webp"
              width={40}
              height={40}
              alt="UnlockTonComputer"
            />
          </Link>
        </section>

        <section id="navigation">
          <Link href="/auth/register">
            Inscription
          </Link>
          <Link href="/auth/login">
            Connexion
          </Link>
        </section>
      </header>

      <main>
        {children}
      </main>
    </>
  )
}

export default AppLayout
