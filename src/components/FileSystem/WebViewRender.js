import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';

export const filesRender = (files, self, name = 'GH File System' ) => {
    console.log(files);
    return (
        <List component="nav" subheader={<ListSubheader className="header-repo" component="div">{name}</ListSubheader>}>
        <div style={{  height: "333px", width: "100%", overflowY:"scroll" }}>

        {files.map(function(file) {
            let fileType = file.type === 'dir' ? faFolder : faFile;
            return <ListItem button key={file.sha} name={file.name} value={file.url} style={{zIndex: 1}} onClick={self.handleClick.bind(self, file.url, file.type)}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={fileType} />                                                            
                            </ListItemIcon>
                            <ListItemText inset primary={file.name} value={file.url}/>
            </ListItem>
         })}
         </div>
         </List>

    );
};