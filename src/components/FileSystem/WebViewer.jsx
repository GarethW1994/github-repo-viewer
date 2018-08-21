import React, { Component } from 'react';
import './WebViewer.css';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { filesRender } from './WebViewRender';
import FileViewer from '../FileViewer/FileViewer';

class WebViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            file: "",
            files: []
        };
    };

    handleClick(value, type, event) {
       let url = value;

       if (url) {       
        fetch(`${url}`)
        .then(res => res.json())
        .then(info => { 
            console.log(info);
            if (type === 'file') {
                this.setState({
                    content: info.content,
                    file: info.name,
                    files: info
                });
            } else if (type === 'dir') {
                this.setState({
                    files: info
                })
            };
        });
        };

        console.log(this.state);
    };

    componentDidMount() {
        console.log(this.props);
        this.setState({
            files: this.props.profile.files
        });

    };

 render() {
    return (
      <div className="root">
        <div className="fileSystem">
            {this.props.profile.files &&
                <div>
                 {!this.state.content && filesRender(this.state.files, this) }
                 {this.state.content && <FileViewer content={this.state.content} file={this.state.file}/>}
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