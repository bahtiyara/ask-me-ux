import React, { Component } from 'react';
import _ from 'lodash';

class Droplist extends Component {
    render() {
        const { content } = this.props;
        return <div className='droplist'>
            <ul>
                {this.renderListItem(content)}
            </ul>
        </div>;
    }

    renderListItem(content) {
        return _.map(content, (row) => {
            return <li key={row} onClick={row.click} >
                <i className='material-icons'>{row.icon}</i>
                <span>{row.text}</span>
            </li>;
        });
    }
}

export default Droplist;