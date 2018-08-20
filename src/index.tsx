import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FunctionalWelcome from './FunctionalWelcome';
import ClassWelcome from './ClassWelcome';

const element: JSX.Element = (
    <div>
        <FunctionalWelcome name='Grzegorz' />
        <ClassWelcome name='Prychowiak' />
    </div>
);
  
ReactDOM.render(element, document.getElementById('root'));