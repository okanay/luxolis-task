import { z } from 'zod';

export const loginValidation = z.object({
  email: z.string().email({ message: 'Wrong email combination.' }),
  password: z
    .string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]*$/, { message: 'Wrong password combination' }),
});

export type TLoginFormattedError = z.inferFormattedError<typeof loginValidation>;
