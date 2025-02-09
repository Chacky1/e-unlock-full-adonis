import RegisterForm from '~/components/register-form'

type RegisterProps = {
  csrfToken: string
}

const Register = (props: RegisterProps) => {
  return (
    <div className="container mx-auto p-4">
      <RegisterForm csrfToken={props.csrfToken} />
    </div>
  )
}

export default Register
