function handleComment(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {text: action.comment, user: action.author}
            ];
            break;
        case 'REMOVE_COMMENT':
            console.log(state, action);
            return state;
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
            [action.postId] : handleComment(state[action.postId], action)
        };
    }

    return state;
}

export default comments;