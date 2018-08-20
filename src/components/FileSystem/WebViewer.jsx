import React, { Component } from 'react';
import './WebViewer.css';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { filesRender } from './WebViewRender';
// import $ from 'jquery';

import FileViewer from '../FileViewer/FileViewer';

class WebViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    };

    handleClick(value, event) {
       let url = value;

        console.log(url);
       if (url) {       
        fetch(`${url}`)
        .then(res => res.json())
        .then(info => { 
            console.log(info);
            if (info.type === 'file') {
                this.setState({
                    content: info.content
                });
            };
        });
        };
    };

 render() {
    return (
      <div className="root">
        <div className="fileSystem">
            {this.props.profile.files &&
                <div>
                 {!this.state.content && filesRender(this.props.profile.files, this) }
                 {this.state.content && <FileViewer content={this.state.content}/>}
                </div>
             } {!this.props.profile.files &&
                <h3>No Files Found</h3>
            }
        </div>
      </div>
    )
  };
};

WebViewer.Proptypes = {
    navAction: Proptypes.func.isRequired,
    profile: Proptypes.object.isRequired,
    username: Proptypes.string
};

const mapStateToProps = state => ({
    ...state
});

export default connect( mapStateToProps )(WebViewer);