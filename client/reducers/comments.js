function handleComment (state = [], action) {
    const cloneState = [...state];

    switch (action.type) {
        case 'ADD_COMMENT':
            return cloneState.concat({text: action.comment, user: action.author});
            break;

        case 'REMOVE_COMMENT':
            cloneState.splice(action.i, 1);
            return cloneState;
            break;

        default:
            return state;
    }
}

function comments (state = [], action) {
    if (typeof action.type !== 'undefined') {
        return {
            // Take the current state
            ...state,

            // Overwrite this post with a new one
            [action.postId]: handleComment(state[action.postId], action)
        };
    }

    return state;
}

export default comments;