export function manageFriends(state, action){
    switch (action.type){
        case 'ADD_FRIEND':
            return {...state,friends: [...state.friends, action.friend] } 
            // { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 } ]
        case 'REMOVE_FRIEND':
        //Find the friend with the matching id
        const indexToRemove = state.friends.findIndex(f => f.id === action.id)
        // remove that friend from the 'friends' array
        //return a new state with an array of friends that includes everyone EXCEPT the removed friend.
            return (
                {...state,
                    friends: [...state.friends.slice(0, indexToRemove), ...state.friends.slice(indexToRemove + 1)]}
            )
        default:
            return state;
    }
}

// let state = {friends: []}
