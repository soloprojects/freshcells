
import { AUTH_TOKEN } from '../../../shared/constants';
import jwt_decode from 'jwt-decode';
import { DecodedJwt } from '../models/DecodedJwt.interface';

// type decodedToken = {
//   userId: string;
//   iat: number;
//   exp: number;
// };
  
export const isAuthenticated = () => {
  const accessToken = localStorage.getItem(AUTH_TOKEN);
  if (!accessToken) {
    return false;
  }
  const decodedJwt: DecodedJwt = jwt_decode(accessToken);
  const epochTS = Math.round(new Date().getTime() / 1000);
  return epochTS < decodedJwt.exp;
};