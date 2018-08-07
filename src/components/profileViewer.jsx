import React, { Component } from 'react'
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import LocationCity from '@material-ui/icons/LocationCity';
import EmailIcon from'@material-ui/icons/Email';

const styles = {
    image: {
        height: "113px",
        width: "35%",
        backgroundSize: "cover",
        borderRadius: "20em"
    },
    
    userInfoContainer: {
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "430px"
    },
    
    avatarContainer: {
       display: "flex",
       "justifyContent": "center"
    },
    
    
    Card: {
        padding: "20px",
        borderRadius:" 1px",
        width: "350px",
        height: "350px"
    }
};

class ProfileViewer extends Component {
   
 componentDidMount() {
    console.log('component unmounted')
 };

 componentWillUnmount() {
     console.log('profile component unmounted')
 }
  render() {
        let user = this.props.profile.profile;
        console.log(user);
        return (
            <React.Fragment>
            <div style={styles.userInfoContainer}>
            <Card style={styles.Card}>      
                <div style={styles.avatarContainer}>
                        <CardMedia 
                         style={styles.image}
                         image={user.avatar_url}
                         title={user.name}
                        />
                </div>
    
                    <CardContent>
                        <Typography gutterBottom variant='headline' component='h2'>
                            {user.name}
                        </Typography>
    
                        <Typography component="p">
                                {user.bio ? user.bio : <span>No bio found</span>}
                        </Typography>
                        <List component="nav">
                            <ListItem button>
                                <ListItemIcon>
                                    <WorkIcon />
                                </ListItemIcon>
                                <ListItemText primary={user.company ? user.company : "No Company"}/>
                            </ListItem>
    
                            <ListItem button>
                                <ListItemIcon>
                                    <LocationCity />
                                </ListItemIcon>
                                <ListItemText primary={user.location ? user.location : "No location"}/>
                            </ListItem>
    
    
                            <ListItem button>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary={user.email ? user.email : "No Email"} />
                            </ListItem>
                        </List>
                    </CardContent>   
                  </Card>
                </div>
            </React.Fragment>
        )
    };
};

ProfileViewer.Proptypes = {
    profile: Proptypes.object.isRequired,
    username: Proptypes.string.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    username: state.username,
    navigation: state.navigation
});

export default connect(mapStateToProps)(ProfileViewer)