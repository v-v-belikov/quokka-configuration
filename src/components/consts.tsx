const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer:'/offer',
} as const;

type AuthenticationStatus = 'AUTH'|'NOT_AUTH';

const AuthenticationStatus = {
  Auth: 'AUTH',
  NotAuth: 'NOT_AUTH',
} as const;

export{AppRoute,AuthenticationStatus};
