import {ALL_REPOS} from './types';
import navAction from './navAction';

const allRepos = (info) => dispatch => {
    console.log('action for ' + info);
    // https://api.github.com/users/garethw1994/repos
    fetch(`https://api.github.com/users/${info.user}/repos`)
    .then(resp => resp.json())
    .then(repositories => {
        console.log(repositories);
        dispatch({
            type: ALL_REPOS,
            payload: repositories
        });

        if (repositories.length > 0) {
            dispatch(navAction(info.location));
        } else {
            dispatch(navAction('profileviewer'));
        }
    });
};

export default allRepos;