import React, { Component } from 'react';

/* CLASS COMPONENT - use when you:
  1. need state
  2. need lifecycle methods
  3. need Prototype functions for events */
class Button extends Component {
    handleClick = (event) => {
        event.preventDefault();
        this.props.onClick(this.props.increment);
    }
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.props.increment > 0 ? '+' : ''}{this.props.increment}
            </button>
        );
    }
}

export default Button; // same as module.exports = Button;
