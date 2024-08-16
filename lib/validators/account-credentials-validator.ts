import z from 'zod'

export const AuthCredValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password at least 8 chars'})
})

export type TAuthCredValidator = z.infer<typeof AuthCredValidator>
