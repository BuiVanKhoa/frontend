var initialState = [];
export default function creactAccountReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_ADVERTISER_ACCOUNT':
            return [...state];
        case 'SHOW_LIST_ADVERTISER_ACCOUNT':
            return [...action.data]
        case 'REMOVE_A_ADVERTISER_ACCOUNT':
            return [...state]
        case 'UPDATE_INFO_FOR_A_ADVERTISER_ACCOUNT':
            return [...state]
        default:
            return state;
    }
}