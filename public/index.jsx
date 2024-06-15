import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './js/views/App';

function Index() {
    return(
        <App />
    )
}

ReactDOM.render(<Index />, document.getElementById('dc-suite'));