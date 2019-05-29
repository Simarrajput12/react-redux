import {
    FETCH_PEOPLE_REQUEST ,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE 
} from '../actions/type';

import {Actions} from 'react-native-router-flux';
export const fetchPeopleRequest = () =>
    ({
        type:FETCH_PEOPLE_REQUEST
    });

export const fetchPeopleSuccess = json =>
    ({
        type:FETCH_PEOPLE_SUCCESS,
        payload:json
    });

export const fetchPeopleFailure = error =>
    ({
        type:FETCH_PEOPLE_FAILURE ,
        payload:error
    });

export const fetchPropleApi = () => {
    return async dispatch => {
        dispatch(fetchPeopleRequest());
        try{
            let response = await fetch("https://randomuser.me/api/?results=15");
            let json = await response.json();
            console.log(json)
            dispatch(fetchPeopleSuccess(json.results));
            // Actions.contact();
        }
        catch(error){
            dispatch(fetchPeopleFailure());
        }
    }
}