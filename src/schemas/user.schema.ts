import { z } from 'zod'

export const userSchema = z.object(
    {
    primerNombre: z.string().min(3),
    segundoNombre: z.string().min(3),
    apellidos: z.string().min(3),
    correo: z.string().email(),
    telefono: z.number(),
    username: z.string().min(3),
    password: z.string().min(3)
    }
)

export const loginSchema = z.object(
    {
    username: z.string().min(3),
    password: z.string().min(3)
    }
)