export function manageFriends(state, action){
    state = { friends: []}
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1 }
            default: 
            return state;
        

    }
}
