import React, {Component} from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
    render() {
        const characters = [
            {
                'name': 'MArk zekerbug',
                'job': 'Facebook founder',
            },
            {
                'name': 'Stev jobs',
                'job': 'Apple founder',
            },
            {
                'name': 'Stev jobs',
                'job': 'Apple founder',
            }
        ];

        return (
            <div className="container">
                <Table characterData={characters} />
            </div>
        );

    }
}

export default App;
