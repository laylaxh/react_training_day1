import React, {Component} from "react";
import ReactDOM from "react-dom";

import Button from './components/Button';

class App extends Component {
    render() {
        return (
            <div>
                <input 
                    ref={(inputElement) => {
                        this.inputELement = inputElement;
                    }} 
                />
               <Button label="Save" /> 
            </div>
        );
    }
}

// render React element. Babel converts to React.createEleemtn("div")
ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
