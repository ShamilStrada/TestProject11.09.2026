import { Middleware } from '@reduxjs/toolkit';
import { RootState } from './Store';
// import { AnyActionArg } from 'react';
import type { UnknownAction } from '@reduxjs/toolkit';

export const KEY = 'password';

export const mailMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  const result = next(action);
  if (Checkmiddleware(action) && action.type.startsWith('user/')) {
    try {
      localStorage.setItem(KEY, JSON.stringify(store.getState().user.isLoggedIn));
    } catch (err) {
      console.error('None:', err instanceof Error ? err.message : err);
    }
  }
  return result;
};

function Checkmiddleware(action: unknown): action is UnknownAction {
  //это type predicate прописывается значение,
  //которое будет возвращаться
  return typeof action === 'object' && action !== null && 'type' in action;
}
