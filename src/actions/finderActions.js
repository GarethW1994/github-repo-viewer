import { FIND_USER } from './types';
import navAction from './navAction';

const finderUser = (username) => dispatch => {
    console.log('find user...' + username);

    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(profile => { 
        dispatch({
            type: FIND_USER,
            payload: {profile, username}
        });

        console.log(profile);
        if (profile.login) {
            dispatch(navAction('profileviewer'));
        } else {
            dispatch(navAction('search'));
        };
    })
    .catch(err => {
        console.log(err);
    });
};

export default finderUser;