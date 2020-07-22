export function manageFriends(state, action){
    state = []
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1 }
            default: 
            return state;
        

    }
}
