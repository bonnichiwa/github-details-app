const REPO_ACTIONS = {
    UPDATE_USERNAME: 'repo/UPDATE_USERNAME',
    SET_EVENTS: 'repo/SET_EVENTS',
    LOGOUT_USER: 'repo/LOGOUT_USER',
};

const INITIAL_REPO_STATE = {
    events: {},
    username: "",
    loggedIn: false,
};

export const updateUsername = username => ({
    type: REPO_ACTIONS.UPDATE_USERNAME,
    payload: username,
});

export const setEvents = events => ({
    type: REPO_ACTIONS.SET_EVENTS,
    payload: events,
});

export const logoutUser = () => ({
    type: REPO_ACTIONS.LOGOUT_USER,
})

export const fetchUsernameThunk = username => dispatch => {
    return fetch(`https://api.github.com/users/${username}/events`)
        .then(res => res.json())
        .then(data => dispatch(setEvents(data)));
};

export const repoReducer = (state = INITIAL_REPO_STATE, action) => {
    switch (action.type) {

        case REPO_ACTIONS.UPDATE_USERNAME: {
            return {
                ...state,
                username: action.payload,
            }
        }

        case REPO_ACTIONS.SET_EVENTS: {
            return {
                ...state,
                events: action.payload,
                loggedIn: true,
            }
        }

        case REPO_ACTIONS.LOGOUT_USER: {
            return {
                ...state,
                events: {},
                loggedIn: false,
                username: "",
            }
        }

        default: {
            return state;
        }
    }
};
