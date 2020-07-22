export function manageFriends(state, action){
    switch (action.type) {
        case 'INCREASE':
            return {count: state.count + 1 }
    }
}
