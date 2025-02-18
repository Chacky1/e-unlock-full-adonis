import { Link, usePage } from '@inertiajs/react'
import AuthNavigation from '~/components/authNavigation'
import { Toaster } from "~/components/ui/toaster"
import UserPanel from '~/components/userPanel'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = usePage().props.isAuthenticated

  return (
    <>
      <header>
        <section id="logo">
          <Link href="/">
            <img
              src="/public/assets/images/e-unlock-logo.png"
              width={250}
              alt="UnlockTonComputer"
            />
          </Link>
        </section>

        <section id="authentication">
          {!isAuthenticated ? <AuthNavigation /> : <UserPanel />}
        </section>
      </header>

      <main>
        {children}
      </main>

      <Toaster />
    </>
  )
}

export default AppLayout
