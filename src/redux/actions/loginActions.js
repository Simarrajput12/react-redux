import {LOG_IN_SUCCESS,} from './type'
import { Actions } from 'react-native-router-flux';



export const login = user =>
    ({
        type:LOG_IN_SUCCESS,
        payload:user
    });

   
    export default function loginSuccess (user,email,password) {
       
    
            // return callback('sdhf');
          return async  dispatch => {
          dispatch(login(user));
              Actions.peoplelist();
            }
        }
      