import { REPO_FILES } from './types';
import navAction from './navAction';

const findFiles = (info) => dispatch => {
    console.log('action for ' + info);
    
    fetch(`https://api.github.com/repos/${info.user}/${info.repo}/contents`)
    .then(resp => resp.json())
    .then(repoInfo => {
        dispatch({
            type: REPO_FILES,
            payload: repoInfo
        });

        if (repoInfo.length > 0) {
            dispatch(navAction(info.location));
        } else {
            dispatch(navAction('search'));
        }
    });
};

export default findFiles;