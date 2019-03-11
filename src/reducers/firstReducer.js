export default function firstReducer(
    state = {
        user: {}
    },
    action
) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return state.items.concat(state.items.length + 1);

        default:
            return state;
    }
}
