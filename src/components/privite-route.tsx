import { Navigate } from 'react-router-dom';
import { AppRoute, AuthenticationStatus, AuthenticationStatusType } from './consts';


type PriviteProps = {
  children: JSX.Element;
  authenticationCurrentStatus: AuthenticationStatusType;
}
function PrivateRoute ({children, authenticationCurrentStatus}: PriviteProps) {
  return (
    authenticationCurrentStatus === AuthenticationStatus.Auth
      ? children
      : <Navigate to = {AppRoute.Login}/>
  );
}

export default PrivateRoute;
