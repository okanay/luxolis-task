import { z } from 'zod';

// ^[A-Za-z0-9!@#$%^&*]*$
// ^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]*$

export const loginValidation = z.object({
  email: z.string().email({ message: 'Wrong email combination.' }),
  password: z
    .string()
    .regex(/^[A-Za-z0-9!@#$%^&*]*$/, { message: 'Wrong password combination' })
    .min(4, { message: 'Your password must be at least 4 characters long.' })
    .max(16, 'Your password must be a maximum of 16 characters long.'),
});

export type TLoginFormattedError = z.inferFormattedError<typeof loginValidation>;
