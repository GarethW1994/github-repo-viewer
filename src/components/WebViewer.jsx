import React, { Component } from 'react'
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';

const styles = ({
    root: {
        width: "100%",
        height: "452px",
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    },

    fileSystem: {
        padding: "20px",
        borderRadius:" 1px",
        width: "350px",
        height: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffff"
    }
  });

  const filesRender = (files, self) => {
        console.log(files);
        return (

            files.map(function(file) {
                let fileType = file.type === 'dir' ? faFolder : faFile;

                return  <ListItem button key={file.sha} value={file.url} onClick={self.handleClick}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={fileType} />                                                            
                                </ListItemIcon>
                                <ListItemText inset primary={file.name} />
                            </ListItem>
            })
        );
  };


class WebViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fs: []
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        console.log(e.target)
    }
    componentWillReceiveProps(nextProp) {
        console.log(nextProp);
    };

    componentDidMount() {
        console.log(this.props);

        if (this.props.profile.files.length > 0) {
            this.setState({
               fs: this.props.profile.files
            });
        }
    };

 render() {
    return (
      <div style={styles.root}>
        <div style={styles.fileSystem}>
            {this.state.fs &&
                    <List component="nav" subheader={<ListSubheader component="div">Files</ListSubheader>}>
                        { filesRender(this.state.fs, this) }
                    </List>
             } {!this.state.fs &&
                <h3>No Files Found</h3>
            }
        </div>
      </div>
    )
  }
}

WebViewer.Proptypes = {
    navAction: Proptypes.func.isRequired,
    profile: Proptypes.object.isRequired,
    username: Proptypes.string
};

const mapStateToProps = state => ({
    ...state
});

export default connect( mapStateToProps )(WebViewer);


// <iframe id="theFrame" src={"//www.github.com/GarethW1994/github-repo-viewer"} 
// style={{width: '100%', height: '465px', left: 0, backgroundPosition: "center", right: 0}} frameBorder="0"></iframe>