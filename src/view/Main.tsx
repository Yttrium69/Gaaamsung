import React from 'react';
import Right from './Right';
import Left from './Left'
import '../CSS/main.scss';


function Main(): JSX.Element {
    return (
        <div className="page_main">
            <Left></Left>
            <Right></Right>
        </div>
    );
}

export default Main;
