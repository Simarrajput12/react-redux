import {LOG_IN_SUCCESS} from '../actions/type'

const initialState = {
  user:false,
  
};
const userReducer = (state = {initialState},action) => {
  switch ('action.type'){
      case LOG_IN_SUCCESS:
      return{
          ...state,user:action.payload
      };
      
      default:
      return state;
  }
}
export default userReducer