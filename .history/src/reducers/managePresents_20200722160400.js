export function managePresents(state, action){
    state = {count: 1 }
    switch (action.type) {
        case 'INCREASE':
            return {count: state.count + 1 }
    }

}
