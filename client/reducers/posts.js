// A reducer takes in two things:

// 1. The action (info about what happend)
// 2. Copy of current state

function posts (state = [], action) {
    console.log('State >>', state);
    console.log('Action >>', action);
    return state;
}

export default posts;