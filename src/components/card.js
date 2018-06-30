import React, { Component } from 'react';
import Chip from './chip';

class Card extends Component {
    render() {
        const {avatarUrl, title, desc, content, likedNum} = this.props.values;
        return <div className='card'>
            <div className='wrapper'>
                <div className='card-header'>
                    <Chip avatarUrl={avatarUrl} title={title} desc={desc} />
                    <div className='card-header-right'>
                        <i className='material-icons'>more_horiz</i>
                    </div>
                </div>
                <p>{content}</p>
                <div className='card-footer'>
                    <div className='like'>
                        <i className='material-icons'>thumb_up</i>
                        <span>{likedNum}</span>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Card;