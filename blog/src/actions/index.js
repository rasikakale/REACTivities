import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// action creator called other action creators
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // successfully gets lists of posts by waiting for response
    await dispatch(fetchPosts());
    
    // get unique Ids for each user
    const userIds = _.uniq(_.map(getState().posts, 'userId'));

    // gets posts for each userId by looping through all userIds
    userIds.forEach(id => dispatch(fetchUser(id)));

    // refactoring above using the _.chain function in lodash
    /*
     _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
    */
};

// getting all posts
export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        }) 
};

// getting users for each post
// id = id of user to fetch
// able to call action creator one time with each unique userId
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};

// memoized version
/*
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// _ indicates it's a private function
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});
*/