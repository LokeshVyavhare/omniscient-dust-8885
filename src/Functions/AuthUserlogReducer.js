export const AuthUserlogReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { status: true, user: action.value };
        case 'logout':
            return { status: false, user: null };
    }
    return state
}