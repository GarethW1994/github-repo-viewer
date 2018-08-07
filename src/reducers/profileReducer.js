import { FIND_USER } from '../actions/types';
import { NAV_POSITION } from '../actions/types';

const initialState = {
    profile: {},
    username: '',
    navigation: 'home'
}

export default function(state = initialState, action) {
        switch(action.type) {
            case FIND_USER:
                console.log('finding user reducer...');
                return {
                    ...state,
                    profile: action.payload.profile,
                    username: action.payload.username
                };
            case NAV_POSITION:
                console.log(action);
                return {
                    ...state,
                    navigation: action.payload
                };
            default:
                return state;
        }
};