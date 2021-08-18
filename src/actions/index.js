// a convention when referring to lodash package is to use underscore.
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
export const fetchPostsAndAuthors = () => {
    // for all action creators, the second function that's available for us to use is getState.
    // getState is the function that exists in Redux that gives us access to all of data inside of Redux.
    return async (dispatch, getState) => {
        // the result of calling fetchPosts must be passed to the dispatch function
        await dispatch(fetchPosts());
        //after we wait for the posts to be fetched, we can then call getState and reference the posts property.
        // we use lodash's uniq() function to only get the unique 'userId' from fetched posts that we .map().
        const userIds = _.uniq(_.map(getState().posts, 'userId'));
        // only the unique ids are going to be looped through. This allows us to only invoke fetchUser 
        // only a few times.
        await userIds.forEach(id => dispatch(fetchUser(id)));
    };
};
export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };
};
export const fetchUser = (userId) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${userId}`);
        dispatch({ type: 'FETCH_USER', payload: response.data });
    };
};