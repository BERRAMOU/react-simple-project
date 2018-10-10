import React, {Component} from 'react';

/**
 *  TableHeader Simple Component
 * @returns {*}
 * @constructor
 */
const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    );
};

/**
 * TableBody Simple Component
 * @returns {*}
 * @constructor
 */
const TableBody = () => {
    return (
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
    );
};

/**
 *  Table class component
 */
class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader/>
                <TableBody/>
            </table>
        );
    }
}

export default Table;
