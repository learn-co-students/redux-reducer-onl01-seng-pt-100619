export function manageFriends(state={friends: []}, action){
    const newFriendArray = (id) => {
        let friendArray = state.friends 
        return friendArray.filter(friend => friend.id != id)
    }
    switch(action.type) {
        case 'ADD_FRIEND': return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND': 
        return {...state, friends: newFriendArray(action.id)
        }
        default: return state
    }
    
}
