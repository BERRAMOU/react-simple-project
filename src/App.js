import React, {Component} from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
    render() {
        const name = "azedine";
        return (
            <div className="container">
                <h1 className="site-heading">Hello, {name} </h1>
                <Table/>
            </div>
        );
    }
}

export default App;
