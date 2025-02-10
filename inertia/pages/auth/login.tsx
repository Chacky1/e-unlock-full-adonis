import LoginForm from '~/components/login-form'

type LoginProps = {
  csrfToken: string
}

const Login = (props: LoginProps) => {
  return (
    <div className="container mx-auto p-4">
      <LoginForm csrfToken={props.csrfToken} />
    </div>
  )
}

export default Login
