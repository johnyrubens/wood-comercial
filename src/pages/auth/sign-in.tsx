import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { signIn } from '@/api/autenticacao'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInForm = z.infer<typeof signInForm>

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  const { mutateAsync: autenticacao } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await autenticacao({ email: data.email, password: data.password })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-between gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Entre com sua conta
            </h1>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-3">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-3">
              <Label htmlFor="email">Sua senha</Label>
              <Input id="password" type="password" {...register('password')} />
            </div>
            <Button disabled={isSubmitting} type="submit">
              Acessar Aplicação
            </Button>
          </form>
        </div>
      </div>
      <Label>Login</Label>
    </>
  )
}
