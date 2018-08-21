import React, { Component } from 'react'
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

class Branches extends Component {
    componentDidMount() {
        console.log(this.props);    
    }
  render() {
      let allBranches = this.props.profile.allRepos.map((branch) => {
                                return  <ListItem button key={branch.id}>
                                <ListItemIcon>
                                  <FontAwesomeIcon icon={faCodeBranch} />
                                </ListItemIcon>
                                <ListItemText inset primary={branch.name} />
                              </ListItem>
                        });

    return (
    <div style={{ width: "100%", height: "450px", display: "flex", "justifyContent": "center", alignItems: "center" }}>
         <div style={{ width: "350px", height: "350px", background: "#ffff", overflowY: "scroll" }}>
            <List component="nav">
            {allBranches}
            </List>
        </div>
    </div>  
    )
  };    
};

Branches.Proptypes = {
    allRepos: Proptypes.array.isRequired
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Branches);

