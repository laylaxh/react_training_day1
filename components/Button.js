import React, { Component } from 'react';

/* CLASS COMPONENT - use when you:
  1. need state
  2. need lifecycle methods
  3. need Prototype functions for events */
class Button extends Component {
    // needed to add to "stage-2" to the .bablerc file and run npm i -D babel-preset-stage-2
    state = { 
        counter: 1 
    };

    incrementCounter = (event) => {  // if this is incrementCounter() = { .. instead 'this will be null unless you bind it in the' 
                                  // constructor or in render: onClick={this.incrementCounter.bind(this)} 
        event.preventDefault(); // won't do default event which is to submit the button here
        
        // setState is async so we should use prevState to make sure new state is updated using the last state
        // WITHOUT () it says begin funcition. WITH parenthesis it says return something, an object
        this.setState((prevState) =>({ counter: prevState.counter + 1 }));
    }

    render(){
        // component output consists of both props and states
        return (
            // REACT ELEMENT (not a component) 
            <button type="submit" onClick={this.incrementCounter}> 
                {this.state.counter}
            </button> 
        );
    }
}

export default Button; // same as module.exports = Button;
