export const manageFriends = (state, action)=>{
    switch (action.type) {
        case 'ADD_FRIEND':
          return ({
            ...state, 
            friends: [
                ...state.friends, 
                action.friend
                ]
            })
        case 'REMOVE_FRIEND':
            let idForRemoval;
            for(let i = 0; i <state.friends.length ;i++){ //iterate over state.friends state has only one object so its stuck in length/i 0
                // console.log(i)
                // console.log(state.friends[i].id)
                if(state.friends[i].id === action.id){
                    idForRemoval = i
                    break
                }
            }
            return (
                {
                friends:
                    [...state.friends.slice(0 , idForRemoval),
                    ...state.friends.slice(idForRemoval + 1)
                    ]
                }
            )
        default:
          return state;
      }
}
// let action = {
//     type: "REMOVE_FRIEND",
//     id: 101
//   }

// let state = {
//     friends: [
//       {
//         name: 'Avi',
//         hometown: 'NYC',
//         id: 100
//       },
//       {
//         name: 'Joe',
//         hometown: 'Boston',
//         id: 101
//       },
//       {
//         name: 'Steven',
//         hometown: 'Philadephia',
//         id: 102
//       }
//     ]
//   };

// manageFriends(state, action)