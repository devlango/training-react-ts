import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IUser {
    firstName: string,
    lastName: string
}

function formatName(user: { firstName: string, lastName: string }): string {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user: IUser): JSX.Element {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Nobody to greet!</h1>;
}

const user: IUser = {
    firstName: 'Grzegorz',
    lastName: 'Prychowiak'
};

const element: JSX.Element = (
    <div className='greeting'>
        {getGreeting(user)}
        <h2>Good to see you here.</h2>
    </div>
);

// const elementJsx = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );

// const elementPure = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world!'
// );

ReactDOM.render(
    element,
    document.getElementById('root')
);