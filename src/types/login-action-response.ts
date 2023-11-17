export type TActionSuccess = {
  ok: true;
  code: 201;
};
export type TActionFail = {
  ok: false;
  code: 400;
  path: 'password' | 'email';
  errorMessage: string;
};
export type TAction = TActionSuccess | TActionFail;
