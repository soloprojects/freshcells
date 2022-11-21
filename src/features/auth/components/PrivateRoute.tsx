import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
 
  return isAuthenticated() ? page : <Navigate replace to='/signin' />;
};

export default PrivateRoute;
