import * as React from 'react';
import IWelcomeProps from './IWelcomeProps';

const welcome: React.StatelessComponent<IWelcomeProps> = (props) => {
    return <h1>Hello, {props.name}</h1>
}

export default welcome;
