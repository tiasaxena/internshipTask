import * as types from './actionType';
import axios from 'axios';

let fetchPostsStart = () => ({
    type: types.FETCH_POST_START,
});

let fetchPostsSuccess = (posts) => ({
    type: types.FETCH_POST_SUCCESS,
    payload: posts,
});

let fetchPostsFailure = (error) => ({
    type: types.FETCH_POST_FAILURE,
    payload: error
});

export function fetchPosts() {
    return function(dispatch) {
        dispatch(fetchPostsStart());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data);
                dispatch(fetchPostsSuccess(response.data));
            })
            .catch(err => {
                dispatch(fetchPostsFailure(err.message));
            });
    };
}