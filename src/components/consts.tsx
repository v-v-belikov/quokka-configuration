const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer:'/offer',
} as const;

type AuthenticationStatusType = 'AUTH'|'NOT_AUTH';

const AuthenticationStatus = {
  Auth: 'AUTH',
  NotAuth: 'NOT_AUTH',
} as const;

export{AppRoute,AuthenticationStatus};
export type {AuthenticationStatusType};
