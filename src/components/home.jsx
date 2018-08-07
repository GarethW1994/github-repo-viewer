import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    aboutBody: {
      margin: "10px",
      height: "100%",
      width: "96%"
    },
    heading: {
      width: "100%",
      textAlign: "center"
    },
    button: {
      width: "100px"
    },
    link: {
      width: "100%",
      textDecoration: "none",
      color: "#fff"
    }
}
export default class Home extends Component {
  render() {
    let mail = String.fromCodePoint(0x2139);
    let point = String.fromCodePoint(0x1F630);
    return (
      <React.Fragment>
      <div style={styles.aboutBody}>
        <Typography variant="display2" gutterBottom style={styles.heading}>
          Welcome !
        </Typography>

        <Typography variant="body1" gutterBottom align="right">
          { mail }
        </Typography>
    
        <Typography variant="caption" gutterBottom align="center">
          About Github Finder
        </Typography>
   
        <Typography gutterBottom>
          {`
            Github Finder is a small weight application built to expand my learning around React and Redux.
          `}
       </Typography>

       <Typography gutterBottom>
       {`
         As much as I learnt working on this project, I still feel that there is so much more to learn. 
       `}
       </Typography>

       <Typography gutterBottom>
        {`
        As my learning expands more and more around React + Redux, this app will be improved more and more.
        `}
       </Typography>

        <Typography gutterBottom>
          {`
            View Demo Below (Silently praying to the Demo Gods ${point}).
          `}
        </Typography>

       <Typography variant="button" gutterBottom>
       <Button variant="contained" color="secondary" style={styles.button}>
          <Link to="/githubfinder" style={styles.link}>Demo</Link>
       </Button>
      </Typography>
     </div>
      </React.Fragment>
    )
  }
}
