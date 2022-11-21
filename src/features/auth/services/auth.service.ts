import jwt_decode from 'jwt-decode';
import { apolloClient } from "../../../graphql/graphql";
import { UserQuery } from "../graphql/queries";
import { LOGIN_MUTATION } from "../graphql/mutation";
import { DecodedJwt } from '../models/DecodedJwt.interface';
import { DisplayUser } from '../models/DisplayUser.interface';
import { Jwt } from '../models/Jwt';
import { LoginUser } from '../models/LoginUser.interface';
import { BAD_REQUEST } from '../../../graphql/graphql-errors';

const login = async (
  user: LoginUser
): Promise<{ jwt: Jwt; user: DisplayUser | null }> => {
  
    const response = await apolloClient
      .mutate({variables: user, mutation: LOGIN_MUTATION })
      .catch((err) => {       
        throw BAD_REQUEST(err);
      });
           
      if (response && response.data){
        localStorage.setItem('jwt',response.data.login.jwt);

          //CONVERT JWT TO OBJECT
          const decodedJwt: DecodedJwt = jwt_decode(response.data.login.jwt);
          let userData: DisplayUser | null = null;

          //GET LOGGED IN USER DETAILS
          const userId:number = decodedJwt.id;
          const userResponse = await apolloClient
          .query({variables: {"id":userId}, query: UserQuery })
          .catch((err) => {
            throw err;
          });
          
          if (userResponse && userResponse.data){
                      
            userData = 
              {"id":userResponse.data.user.id, 
              "firstName":userResponse.data.user.firstName, 
              "lastName":userResponse.data.user.lastName, 
              "email":userResponse.data.user.email,
            };

            //STORE USER IN THE BROWSER LOCAL STORAGE
            localStorage.setItem('user', JSON.stringify(userData));
          }
        
        return {jwt: response.data.login.jwt, user: userData};
      }
      
      return {jwt: null, user: null};

};

//LOGOUT AND REMOVE STORED LOCAL STORAGE
const logout = (): void => {
  localStorage.removeItem('user');
  localStorage.removeItem('jwt');
};

//OBJECT FOR EXPORT
const authService = {
  login,
  logout,
};

export default authService;
