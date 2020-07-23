export function manageFriends(state={friends: []}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const index = state.friends.findIndex(friend => friend.id === action.id)
      const newArray = [...state.friends.slice(0,index)
        ,...state.friends.slice(index + 1)
        ]
        return (
          {friends: newArray}
        )
      default:
        return state;
  }
}

