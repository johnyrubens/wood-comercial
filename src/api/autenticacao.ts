import { api } from '@/lib/axios'

export interface SignInPayload {
  email: string
  password: string
}

export async function signIn(signInPayload: SignInPayload) {
  await api.post('/api/v1/usuario/login', signInPayload)
}
