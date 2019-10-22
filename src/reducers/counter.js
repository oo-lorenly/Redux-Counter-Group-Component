const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'PRODUCT':
            return state * 2;
        case 'QUOTIENT':
            return state / 2;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}

export default counterReducer;