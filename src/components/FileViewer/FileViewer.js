import React from "react";
import AceEditor from 'react-ace';
import 'brace/mode/python';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/mode/javascript';
import 'brace/mode/java';
import 'brace/mode/markdown';
import 'brace/mode/handlebars';
import 'brace/mode/csharp';
import 'brace/mode/mysql';
import 'brace/mode/xml';
import 'brace/mode/sass';
import 'brace/mode/json';

import 'brace/theme/twilight';

const fileExtension = (fileName) => {
    let ext = fileName.split('.')[1];
    console.log(ext);
    switch (ext) {
        case 'js':
                return 'javascript';
        case 'md' || 'MD':
                return 'markdown';
        case '.gitignore': 
                return 'git';
        case 'py':
                return 'python';
        default:
            return ext;
    };
};


class FileViewer extends React.Component  {
    onChange(newValue) {
        console.log('change', newValue);
    }
    componentDidMount() {
        console.log(this.props);
    };

    render() {
       return <AceEditor
        mode={fileExtension(this.props.file)}
        theme="twilight"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
        style={{ width: '500px', height: '416px' }}
        editorProps={{$blockScrolling: true}}
        value={atob(this.props.content)}
      /> 
    }
};

export default FileViewer;
