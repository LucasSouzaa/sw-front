import * as types from './types';

export function getTheForce() {
    return dispatch => {

        dispatch({
            type: types.FEEL_THE_FORCE
        })
        dispatch({
            type: types.GET_THE_FORCE,
            payload: {
                request: {
                    url: `1`,
                    method: 'GET',
                },
            },
        })

        return dispatch({
            type: types.GET_THE_FORCE,
            payload: {
                request: {
                    url: `4`,
                    method: 'GET',
                },
            },
        })
    }
}
