import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

class App extends Component {
    // needed to add to "stage-2" to the .bablerc file and run npm i -D babel-preset-stage-2
    state = {
      counter: 99
    };

    incrementCounter = (increment) => {
      this.setState((prevState) => {
        return {counter: prevState.counter + increment};
      });
    }

    render() {
        return (
            <div>
                <Button increment={1} onClick={this.incrementCounter} />
                <Button increment={10} onClick={this.incrementCounter} />
                <Button increment={-5} onClick={this.incrementCounter} />
                <div>{this.state.counter}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
