import * as React from 'react';
import * as ReactDOM from 'react-dom';

function tick() {
    const element: JSX.Element = (
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  // react elements are immutable
  // react-dom updates only what is necessary
  setInterval(tick, 1000);