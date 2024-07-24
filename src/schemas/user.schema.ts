import { z } from 'zod'

export const userSchema = z.object(
    {
        nombres: z.string().min(3),
    apellidos: z.string().min(3),
    correo: z.string().email(),
    telefono: z.number(),
    user: z.string().min(3)
    }
)