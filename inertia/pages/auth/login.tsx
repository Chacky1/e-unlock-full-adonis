import { useForm } from '@inertiajs/react'
import AppLayout from '~/layouts/app'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { Loader } from 'lucide-react'

const Login = () => {
  const form = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    form.post('/auth/login', { onSuccess: () => form.reset() })
  }

  return (
    <AppLayout>
      <form className="container mx-auto p-4" onSubmit={handleSubmit}>
        <Label htmlFor="email">
          <span>E-mail</span>
          <Input
            id="email"
            type="email"
            value={form.data.email}
            onChange={(e) => form.setData('email', e.target.value)}
            disabled={form.processing}
          />
          {form.errors.email && (
            <p className="text-red-500">{form.errors.email}</p>
          )}
        </Label>

        <Label htmlFor="password">
          <span>Mot de passe</span>
          <Input
            id="password"
            type="password"
            value={form.data.password}
            onChange={(e) => form.setData('password', e.target.value)}
            disabled={form.processing}
          />
          {form.errors.password && (
            <p className="text-red-500">{form.errors.password}</p>
          )}
        </Label>

        <Button type="submit" disabled={form.processing}>
          {form.processing && <Loader className="mr-2 h-4 w-4 animate-spin" />}
          Connexion
        </Button>
      </form>
    </AppLayout >
  )
}

export default Login
