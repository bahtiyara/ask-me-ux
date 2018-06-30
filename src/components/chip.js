import React, { Component } from 'react';

class Chip extends Component {
    render() {
        const {avatarUrl, title, desc} = this.props;
        return <div className='chip'>
            <div className='avatar' style={{backgroundImage: `url(${avatarUrl})`}}></div>
            <div className='chip-content'>
                <span>{title}</span>
                <span>{desc}</span>
            </div>
        </div>;
    }
}

export default Chip;