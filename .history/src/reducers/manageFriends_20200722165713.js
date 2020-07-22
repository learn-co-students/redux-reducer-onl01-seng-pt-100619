export function manageFriends(state, action){
    state = { friends: []}
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1 }
            case "ADD_FRIEND":
                return (
                  {...state,
                      friends: [
                        ...state.friends,
                        action.friend
                      ]
                  }
              )           
              default: 
            return state;

        

    }
}
