// A reducer takes in two things:

// 1. The action (info about what happend)
// 2. Copy of current state

function posts (state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            state[i].likes += 1;

            return [...state];
            break;
        default:
            return state;
    }
}

export default posts;