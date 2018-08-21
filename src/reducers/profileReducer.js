import { FIND_USER, NAV_POSITION, REPO_FILES, ALL_REPOS } from '../actions/types';

const initialState = {
    profile: {},
    username: '',
    navigation: 'home',
    files: [],
    allRepos: []
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
            case REPO_FILES:
                console.log('repo files reducer', action);
                    return {
                        ...state,
                        files: action.payload
                    };
            case ALL_REPOS: 
                    console.log('all repos reducer', action);
                    return {
                         ...state,
                         allRepos: action.payload
                    }
            default:
                return state;
        }
};