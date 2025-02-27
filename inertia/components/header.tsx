import { Link, usePage } from '@inertiajs/react'
import AuthNavigation from '~/components/auth-navigation'
import UserPanel from '~/components/userPanel'

const Header = () => {
  const isAuthenticated = usePage().props.isAuthenticated

  return (
    <header className='sticky top-0 z-50 h-16 flex justify-between items-center px-8 bg-background lg:px-32'>
      <section id="logo">
        <Link href="/">
          <img
            src="/public/assets/images/e-unlock-logo.png"
            width={150}
            alt="UnlockTonComputer"
          />
        </Link>
      </section>

      <section id="authentication">
        {isAuthenticated ? <UserPanel /> : <AuthNavigation />}
      </section>
    </header>
  )
}

export default Header
