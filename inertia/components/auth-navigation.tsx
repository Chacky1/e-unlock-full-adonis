import NavigationLink from './navigation-link'

const AuthNavigation = () => {
  return (
    <div className='flex gap-4'>
      <NavigationLink href="/auth/register" label="Inscription" />
      <NavigationLink href="/auth/login" label="Connexion" />
    </div>
  )
}

export default AuthNavigation
