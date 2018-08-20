import * as React from 'react';
import IWelcomeProps from './IWelcomeProps';

class ClassWelcome extends React.Component<IWelcomeProps, any> {
    public render(): JSX.Element {
        // this.props.name = "temp";
        return <h1>Hello, {this.props.name}</h1>
    }
}

export default ClassWelcome;
