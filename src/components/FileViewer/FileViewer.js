import React from "react";
import Prism from "prismjs";
import "./prism.css";

class FileViewer extends React.Component  {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Prism.highlightAll();
    };

    render() {
        return <pre style={{ height: "340px" }}><code className="language-json">{atob(this.props.content)}</code></pre> 
    }
};

export default FileViewer;
