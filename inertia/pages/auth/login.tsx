import { useForm } from '@inertiajs/react'
import AppLayout from '~/layouts/app'
import { Button } from '~/components/ui/button'
import { Loader } from 'lucide-react'
import { useToast } from "~/hooks/use-toast"
import FormInput from '~/components/form-input'

const Login = () => {
  const form = useForm({
    email: '',
    password: '',
  })

  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    form.post('/auth/login', {
      onSuccess: () => toast({
        title: "Connexion réussie",
        description: "Bienvenue sur e-unlock !",
      })
    })
  }

  return (
    <AppLayout>
      <form className="container mx-auto px-24 flex flex-col gap-8 mt-8" onSubmit={handleSubmit}>
        <FormInput id="email" label="E-mail" type="email" changeHandler={(e) => form.setData('email', e.target.value)} value={form.data.email} error={form.errors.email} disabled={form.processing} required />
        <FormInput id="password" label="Mot de passe" type="password" changeHandler={(e) => form.setData('password', e.target.value)} value={form.data.password} error={form.errors.password} disabled={form.processing} required />

        <Button type="submit" disabled={form.processing}>
          {form.processing && <Loader className="mr-2 h-4 w-4 animate-spin" />}
          Connexion
        </Button>
      </form>
    </AppLayout >
  )
}

export default Login
