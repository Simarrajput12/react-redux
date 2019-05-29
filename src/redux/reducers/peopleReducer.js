import {
    FETCH_PEOPLE_REQUEST ,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE 
} from '../actions/type';
  
const initialState = {
    isFetching:false,
    isErrorMessage:'',
    people:[]
};

const peopleReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_PEOPLE_REQUEST:
        return{
            ...state,isFetching:true
        };
        case FETCH_PEOPLE_SUCCESS:
        return{
            ...state,isFetching:false, people:action.payload
        };
        case FETCH_PEOPLE_FAILURE:
        return{
            ...state,isFetching:false,isErrorMessage:action.payload
        };
        default:
        return state;
    }
}
 
export default peopleReducer;