import React from 'react';
import ReactDOM from 'react-dom';


setInterval(() => {

    const jsTree = `
        <div>
            <h2>Hello JS</h2>
            <input />
            <span>${new Date()}</span>
        </div>
    `;

    // THE REACT WAY
    const tree = <div>
        <h2>Hello React...</h2>
        <input />
        <span>{new Date().toString()}</span>
    </div>;


    document.getElementById('js').innerHTML = jsTree;
    ReactDOM.render(
        tree,
        document.getElementById('root'),
    );
}, 1000);


ReactDOM.render(
    tree, 
    document.getElementById('root')
)
