import { atom } from 'jotai';

type TLoginStatusOk = { isError: false };
type TLoginStatusFail = { isError: true; errorMessage: string; code?: number; path?: 'email' | 'password' };

type TLoginStatusAtom = TLoginStatusOk | TLoginStatusFail;

export const loginStatusAtom = atom<TLoginStatusAtom>({ isError: false });
