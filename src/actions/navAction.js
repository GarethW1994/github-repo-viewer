import { NAV_POSITION } from "./types";

const navAction = (navigation) => dispatch => {
    dispatch({
        type: NAV_POSITION,
        payload: navigation
    });
};

export default navAction;