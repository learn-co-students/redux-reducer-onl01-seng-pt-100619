export function managePresents(state, action){
    state = {numberOfPresents: 0 }
    switch (action.type) {
        case 'INCREASE':
            return {count: state.numberOfPresents + 1 }
    }

}
