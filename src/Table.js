import React, {Component} from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>MArk zekerbug</td>
                    <td>FaceBook Founder</td>
                </tr>
                <tr>
                    <td>Steve Jobs</td>
                    <td>Apple Founder</td>
                </tr>
                <tr>
                    <td>Steve Jobs</td>
                    <td>Apple Founder</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;
