import React, { Component } from 'react'
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
// import  { Link } from 'react-router-dom'
import ProfileViewer from './profileViewer';

import finderUser from '../actions/finderActions';
import navAction from '../actions/navAction';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = {
    formContainer: {
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "430px"
    },

    AppCard : {
        padding: "20px",
        borderRadius:" 1px",
        width: "350px",
        height: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    formContents : {
        width: "90%",
        height: "90%"
    },

    searchButton : {
        width: "100%"
    },

    username : {
        fontSize: "17px"
    },

    nameHelperText : {
        fontSize: "10px"
    },

    formheadline: { 
        marginBottom: "10px",
        fontSize: "20px"
    },
    image: {
      height: "146px",
      width: "100%",
      backgroundSize: "contain"
    }
};

class GithubFinder extends Component {
      constructor(props) {
        super(props);
        this.state = {
          username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      };

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.finderUser(this.state.username);
  };

  componentDidMount() {
    this.props.navAction('search');
  };
  

  render() {
    return (
    <div>
        { this.props.profile.navigation === 'search' &&
        <div style={styles.formContainer}>
          <Card style={styles.AppCard}>
            <div style={styles.formContents}>
              <div>
              <CardMedia
                style={styles.image}
                image="https://img4.goodfon.ru/wallpaper/big/2/21/github-git-octocat-programming-code-it-logo.jpg"
                title="Github Image"
                />
              </div>
              <CardContent>
                <Typography color="secondary" variant="headline" component="h2" styles={styles.formheadline}>
                  Let's Start Here
                </Typography>
                <FormControl>
                  <InputLabel htmlFor="name-helper">Github Username</InputLabel>
                  <Input id="username" name="username"  onChange={this.handleChange}/>
                  <FormHelperText style={styles.nameHelperText}>Eg. defunkt</FormHelperText>
                </FormControl>
              </CardContent>
              <CardActions>
                <Button variant="contained" onClick={this.onSubmit} style={styles.searchButton} color="default">
                  Search
                </Button>
              </CardActions>
              </div>
        </Card>
      </div>

      } { this.props.profile.navigation === 'profileviewer' &&
        <ProfileViewer />
      }
        </div>
    );    
  };
};

GithubFinder.Proptypes = {
  finderUser: Proptypes.func.isRequired,
  navAction: Proptypes.func.isRequired,
  profile: Proptypes.object.isRequired,
  username: Proptypes.string
};

const mapStateToProps = state => ({
    profile: state.profile,
    username: state.username,
    navigation: state.navigation
});

export default connect(
  mapStateToProps,
  { finderUser,  navAction }
)(GithubFinder);
