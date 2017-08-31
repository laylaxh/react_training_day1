import React from "react";  // can do import React, {Component} from "react" and use Component below instead of React.Component
import ReactDOM from "react-dom";

// // FUNCTION COMPONENT
// function Button1(props){
//     return (
//         // REACT ELEMENT (not a component)
//         <button>{props.label}</button>  // The browser executes React.createElement
//     );
// }

// CLASS COMPONENT - a different syntax (class syntax) to write a React component. Has state.
class Button2 extends React.Component {
    // needed to add to "stage-2" to the .bablerc file and run npm i -D babel-preset-stage-2
    state = { counter: 1 };

    incrementCounter = (event) => {  // if this is incrementCounter() = { .. instead 'this will be null unless you bind it in the 
                                    // constructor or in render: onClick={this.incrementCounter.bind(this)} 
        event.preventDefault(); // won't do default event which is to submit the button here
        
        // setState is async so we should use prevState to make sure new state is updated using the last state
        // this.setState((prevState) => ({ // can manage state always using setState - can pass in object or function
        //     return ( counter: prevState.counter + 1 ); // has to return something
        // })); OR you can shorten it. WITHOUT () it says begin funcition. WITH parenthesis it says return something, an object
        this.setState((prevState) =>({ counter: prevState.counter + 1 }));
    }

    render(){
        // component output consists of both props and states
        return (
            // REACT ELEMENT (not a component). Note: all events are camel-case. 
            // need to pass in a function reference (not call) for onClick. pass in actual JS
            <button type="submit" onClick={this.incrementCounter}> 
                {this.state.counter}  {/* can read the state like this */}
            </button> 
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <input ref={(inputElement) => {this.inputELement = inputElement;}} />
                <a href='#' onClick={() => {
                    this.inputElement.focus();
                }}>Focus Input</a>

               {/*  REACT ELEMENT THAT CREATES A COMPONENT - COMPONENT ELEMENT (instance of a component) */}
               <Button2 label="Save" /> 
            </div>
        );
    }
}

// render React element. Babel converts to React.createElement("div")
ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
