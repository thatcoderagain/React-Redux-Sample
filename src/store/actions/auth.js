export const SET_AUTH = 'SET_AUTH';

const setAuth = (user) => async (dispatch, state) => {
    dispatch({
        type: SET_AUTH,
        payload: user
    });
};

export default setAuth;
