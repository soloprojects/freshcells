import { DisplayUser } from './DisplayUser.interface';

export interface DecodedData {
  user: DisplayUser;
  exp: number;
  iat: number;
}

export interface DecodedJwt {
  id: number;
  exp: number;
  iat: number;
}
