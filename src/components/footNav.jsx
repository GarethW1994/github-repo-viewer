import React, { Component } from 'react'
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import navAction from '../actions/navAction';
import findFiles from '../actions/repoFileAction';
import allRepos from '../actions/reposAction';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCode, faUser, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import WebViewer from './FileSystem/WebViewer';
import Branches from './Branches/Branch';

const styles = {
    TabBarContainer: {
        position:"fixed",
        left:"0px",
        bottom: "0px",
        right: "-5px",
        width:"100%"
    },
    root: {
        zIndex: 1,
        bottom: 0,
        position: "fixed",
        width: "100%"
      },
      homeBar: {
          width: "100%"
      }
};

const footerRender = (props, self) => {
    console.log(props);

    switch (props) {
        case "search":
            return (
                <div>
                <Paper  style={styles.TabBarContainer} square={true}>
                <Tabs
                 value={self.state.value}
                 onChange={self.handleChange}
                 fullWidth
                 indicatorColor="secondary"
                 textColor="secondary"
                 >
        
                 <Tab icon={<FontAwesomeIcon icon={faSearch} size="2x"/>} name="search" label="Github Finder" />
                 <Tab icon={<FontAwesomeIcon icon={faCode} size="2x"/>} label="Source Code" name="sourceCode" />
    
                </Tabs>
                </Paper>
                </div>
            );
        case "profileviewer":
            return (
                <div>  
                <Paper style={styles.TabBarContainer} square={true}>
                <Tabs
                 value={self.state.value}
                 onChange={self.handleChange}
                 name={props}
                 fullWidth
                 indicatorColor="secondary"
                 textColor="secondary"
                 >
        
                 <Tab name="profile" icon={<FontAwesomeIcon icon={faUser} size="2x"/>} label="Profile" />
                 <Tab name="ghProfile" icon={<FontAwesomeIcon icon={['fab', 'fa-github']} size="2x"/>} label="Github Profile" />
                 <Tab name="repo" icon={<FontAwesomeIcon icon={faCodeBranch} size="2x"/>} label="Repositories" />
                 <Tab name="githubsearch" icon={<FontAwesomeIcon icon={faSearch} size="2x"/>} label="Search" />
                
                </Tabs>
                </Paper>
                </div>
            );
        case'sourceCode': 
            return(
                    <div>
                            <WebViewer repo={"github-repo-viewer"}/>
                            <div>
                            <Paper  style={styles.TabBarContainer} square={true}>
                            <Tabs
                             value={self.state.value}
                             onChange={self.handleChange}
                             fullWidth
                             indicatorColor="secondary"
                             textColor="secondary"
                             >
                    
                             <Tab icon={<FontAwesomeIcon icon={faSearch} size="2x"/>} name="search" label="Github Finder" />
                             <Tab icon={<FontAwesomeIcon icon={faCode} size="2x"/>} label="Source Code" name="sourceCode" />
                
                            </Tabs>
                            </Paper>
                            </div>   
                    </div>
                )
        case "home":
            let emoji = String.fromCodePoint(0x1F603);
            return (
                <div style={styles.root}>
                <AppBar position="static" color="default">
                  <Toolbar>
                    <Typography variant="body2" align="center" color="inherit" style={styles.homeBar}>
                        <span>'It works on my machine'. - { emoji }</span>
                    </Typography>
                  </Toolbar>
                </AppBar>
              </div>
            )
        case "repositories":
                return (
                    <div>  
                    <Branches />

                    <Paper style={styles.TabBarContainer} square={true}>
                    <Tabs
                     value={self.state.value}
                     onChange={self.handleChange}
                     name={props}
                     fullWidth
                     indicatorColor="secondary"
                     textColor="secondary"
                     >
            
                     <Tab name="profile" icon={<FontAwesomeIcon icon={faUser} size="2x"/>} label="Profile" />
                     <Tab name="ghProfile" icon={<FontAwesomeIcon icon={['fab', 'fa-github']} size="2x"/>} label="Github Profile" />
                     <Tab name="repo" icon={<FontAwesomeIcon icon={faCodeBranch} size="2x"/>} label="Repositories" />
                     <Tab name="githubsearch" icon={<FontAwesomeIcon icon={faSearch} size="2x"/>} label="Search" />
                    
                    </Tabs>
                    </Paper>
                    </div>
                )
        default:
        return (
            <div>{props}</div>
        )
    };
};  

class FootNav extends Component {
    
  constructor (props) {
    super(props);
    this.state = {
      navigation: '',
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.onNavigate = this.onNavigate.bind(this);
};



    componentWillReceiveProps(nextProps) {
        switch (nextProps.profile.navigation) {
            case "profileviewer":
                this.setState({
                    navigation: nextProps.profile.navigation
                });  
                break;
            case "search":
                this.setState({
                    navigation: nextProps.profile.navigation
                });
                break;
            case "home":
                this.setState({
                    navigation: nextProps.profile.navigation
                });
                break;
            default:
                break;
        }
    };

    handleChange(e, value) {
        console.log(value)
        if (this.state.navigation === 'search') {
            switch (value) {
                case 0:
                        this.props.navAction('search');
                        this.setState({
                            value: 0,
                        })
                    break;
                case 1:         
                        this.props.findFiles({
                            location: 'sourceCode',
                            repo: "github-repo-viewer",
                            user: 'GarethW1994'
                        });

                        this.setState({
                            value: 1,
                        })
                    break;
                default:
                    break;
            };
        } else if (this.state.navigation === 'profileviewer') {
            switch (value) {
                case 0:
                     this.props.navAction('profileviewer');
                    this.setState({
                        value
                    });
                    break;
                case 1:
                    this.setState({
                        value
                    });
                    window.open(this.props.profile.profile.html_url);

                    break;
                case 2:
                 this.props.allRepos({
                    location: 'repositories',
                    user: this.props.profile.username
                });
                    this.setState({
                        value
                    });
                    break;
                case 3:
                    this.setState({
                        value: 0
                    });
                    this.props.navAction('search');
                    break;
                default:
                    break;
            }
        };
    };

    onNavigate(e) {
        this.setState({
            navigation: e.target.value
        });

        this.props.navAction(this.state.navigation);
    };

 render() {
    return (
        <Router>
            <div>
                { footerRender(this.props.profile.navigation, this) }
            </div>
        </Router>       
    )
  }
};

FootNav.Proptypes = {
    navAction: Proptypes.func.isRequired,
    profile: Proptypes.object.isRequired,
    username: Proptypes.string
};

const mapStateToProps = state => ({
    profile: state.profile,
    username: state.username,
    navigation: state.navigation
});


export default connect(mapStateToProps, { navAction, findFiles , allRepos} )(FootNav);
