import { Navigate } from 'react-router-dom';
import { AppRoute, AuthenticationStatus } from './consts';

type PriviteProps = {
  children: JSX.Element;
  authenticationCurrentStatus: AuthenticationStatus;
}
function PrivateRoute ({children, authenticationCurrentStatus}: PriviteProps) {
  return (
    authenticationCurrentStatus === AuthenticationStatus.Auth
      ? children
      : <Navigate to = {AppRoute.Login}/>
  );
}

export default PrivateRoute;
