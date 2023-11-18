import { atom } from 'jotai';

type TLoginStatusOk = { isError: false };
type TLoginStatusFail = { isError: true; path: 'email' | 'password'; errorMessage: string; code?: number };

type TLoginStatusAtom = TLoginStatusOk | TLoginStatusFail;

export const loginStatusAtom = atom<TLoginStatusAtom>({ isError: false });
