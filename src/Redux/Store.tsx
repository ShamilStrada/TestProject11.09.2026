import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CheckMail, { InitialProps } from './CheckMailSlice';
import { KEY, mailMiddleware } from './MiddlewareMail';

const rootReducer = combineReducers({
  user: CheckMail,
});

const loadPersistedAuth = (): boolean => {
  try {
    const saved = localStorage.getItem(KEY);
    return saved ? JSON.parse(saved) : true;
  } catch (err) {
    console.error('Ошибка', err);
    return false;
  }
};
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    user: { ...InitialProps, isLoggedIn: loadPersistedAuth() },
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mailMiddleware),
});
export type RootState = ReturnType<typeof rootReducer>; //Форма стейта//Меняли чтоб выводили из RootReducer
//До этого брала из state
export type AppDispatch = typeof store.dispatch;
