import * as types from './actionType';
import axios from 'axios';

let fetchUsersStart = () => ({
    type: types.FETCH_USER_START,
});

let fetchUsersSuccess = (users) => ({
    type: types.FETCH_USER_SUCCESS,
    payload: users,
});

let fetchUsersFailure = (error) => ({
    type: types.FETCH_USER_FAILURE,
    payload: error
});

export function fetchUsers() {
    return function(dispatch) {
        dispatch(fetchUsersStart());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data);
                dispatch(fetchUsersSuccess(response.data));
            })
            .catch(err => {
                dispatch(fetchUsersFailure(err.message));
            });
    };
}