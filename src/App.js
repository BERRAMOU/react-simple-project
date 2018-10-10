import React, {Component} from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
    // Define state object
    state = {
        characters: [
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
        ]
    };

    /**
     *
     * @param index
     */
    removeCharacter = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    };

    render() {

        return (
            <div className="container">
                <Table
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );

    }
}

export default App;
