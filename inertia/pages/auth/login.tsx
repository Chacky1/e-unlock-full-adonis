import LoginForm from '~/components/login-form'
import Navigation from '~/components/navigation'

type LoginProps = {
  csrfToken: string
}

const Login = (props: LoginProps) => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto p-4">
        <LoginForm csrfToken={props.csrfToken} />
      </div>
    </>
  )
}

export default Login
