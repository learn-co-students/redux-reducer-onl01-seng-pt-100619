export function manageFriends(state={friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
            let friends = [...state.friends]
            friends.push(action.friend)
            return {friends: friends}
        case "REMOVE_FRIEND":
            const newFriends = state.friends.filter((element)=> element.id != action.id)
            return {friends: newFriends}
        default:
            return state;
    }
}
