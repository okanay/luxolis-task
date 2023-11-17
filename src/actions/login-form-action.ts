'use server';

import { testUserValue } from '@/constants/test-user-values';
import { TAction } from '@/types/login-action-response';

// This function runs on the server.
// On the client side, input values are validated before being sent to the server using <FormData>.
// Later, the input values are compared with the <testUserValue>, and error checks are performed.

export const loginFormAction = async (formData: FormData) => {
  let initialResponse: TAction = { ok: true, code: 201 };
  let response: TAction = initialResponse;

  const emailInput = formData.get('email');
  const passwordInput = formData.get('password');
  const { email, password } = testUserValue;

  if (email !== emailInput) {
    response = {
      ok: false,
      code: 400,
      path: 'email',
      errorMessage: 'The provided email is incorrect',
    };
    return response;
  } else if (password !== passwordInput) {
    response = {
      ok: false,
      code: 400,
      path: 'password',
      errorMessage: 'The provided password is incorrect',
    };
    return response;
  }
  return response;
};
