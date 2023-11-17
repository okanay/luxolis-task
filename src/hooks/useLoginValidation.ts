'use client';

import { loginValidation, TLoginFormattedError } from '@/validations/login-validation';
import { useState } from 'react';

export const useLoginValidation = () => {
  const [formattedErrors, setFormattedErrors] = useState<TLoginFormattedError>();

  // Checks the input values. If the values are suitable for sending to the server, it returns <true>.
  const checkLoginInput = (values: unknown) => {
    const validation = loginValidation.safeParse(values);

    if (!validation.success) {
      setFormattedErrors(validation.error.format());
    } else {
      setFormattedErrors(undefined);
    }

    return validation.success;
  };

  // Transfers all errors to an <array>.
  const combineErrorsMessages = (): string[] => {
    let errorMessage = [] as string[];

    formattedErrors?.email?._errors.forEach(i => errorMessage.push(i));
    formattedErrors?.password?._errors.forEach(i => errorMessage.push(i));

    return errorMessage;
  };

  // Clears all captured errors.
  const clearError = () => setFormattedErrors(undefined);

  return { combineErrorsMessages, formattedErrors, checkLoginInput, clearError };
};
