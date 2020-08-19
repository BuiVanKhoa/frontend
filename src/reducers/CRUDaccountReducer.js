var initialState = [];
export default function creactAccountReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_DAC_ACCOUNT':
            return [...state];
        case 'SHOW_LIST_DAC_ACCOUNT':
            return [...action.data]
        case 'REMOVE_A_DAC_ACCOUNT':
            return [...state]
        case 'UPDATE_INFO_FOR_A_DAC_ACCOUNT':
            return [...state]
        default:
            return state;
    }
}