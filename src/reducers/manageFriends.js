export function manageFriends(state, action) {
  let newState = { ...state };
  switch (action.type) {
    case "ADD_FRIEND":
      newState.friends.push(action.friend);
      return newState;
    //   return { friends: state.friends.push(action.friend) };
    case "REMOVE_FRIEND":
      newState.friends = newState.friends.filter(
        (friend) => action.id != friend.id
      );
      return newState;
    default:
      return state;
  }
}
