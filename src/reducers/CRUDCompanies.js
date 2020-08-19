var initialState = [];
export default function creactAccountReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_COMPANIES_ACCOUNT':
            return [...state];
        case 'SHOW_LIST_COMPANIES_ACCOUNT':
            return [...action.data]
        case 'REMOVE_A_COMPANIES_ACCOUNT':
            return [...state]
        case 'UPDATE_INFO_FOR_A_COMPANIES_ACCOUNT':
            return [...state]
        default:
            return state;
    }
}