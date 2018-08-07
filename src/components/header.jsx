import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    title : {
        width: "100%",
        textAlign: "center"
    },
    capital : {
        fontSize: "20px"
    },
    letters: {
        fontSize: "17px"
    }
}
export default class Header extends Component {
  render() {
    return (
      <div>
      <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="default" align="center" id="title" style={styles.title}>
          <span style={styles.capital} id="capitalG">G</span>
          <span style={styles.letters}>ITHUB</span> 
          <span id="capitalF" style={styles.capital}> F</span>
          <span style={styles.letters}>INDER</span>
        </Typography>
      </Toolbar>
      </AppBar>
      </div>
    )
  }
}
