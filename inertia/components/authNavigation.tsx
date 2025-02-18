import { Link } from '@inertiajs/react'

const AuthNavigation = () => {
  return (
    <>
      <Link href="/auth/register">
        Inscription
      </Link>
      <Link href="/auth/login">
        Connexion
      </Link>
    </>
  )
}

export default AuthNavigation
