import { Link } from '@inertiajs/react'

const AuthNavigation = () => {
  return (
    <div className='flex gap-4'>
      <Link href="/auth/register" className='text-muted-foreground transition-colors hover:text-foreground'>
        Inscription
      </Link>
      <Link href="/auth/login" className='text-muted-foreground transition-colors hover:text-foreground'>
        Connexion
      </Link>
    </div>
  )
}

export default AuthNavigation
