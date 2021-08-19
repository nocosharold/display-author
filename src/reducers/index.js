import { combineReducers } from "redux";

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;

        default:
            return state;
    }
};

const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            // we are pushing the action.payload to state.
            // Basically, we are pushing each users to the state object
            return [...state, action.payload];
        default:
            return state;
    }
};

// the users property will then be accessible in our AuthorName component as state.users
export default combineReducers({ 
    posts: postsReducer, 
    users: userReducer
});