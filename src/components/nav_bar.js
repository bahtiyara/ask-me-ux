import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        const {pageTitle, noShadow, leftIcon, leftIconClick, rightIcon, rightIconClick} = this.props;
        return <div
            style={{boxShadow: noShadow ? '' : '0 2px 4px 0 rgba(0,0,0,0.20)'}}
            className='nav-bar'>
            <div className='container'>
                {this.renderIcon(leftIcon, leftIconClick)}
                <h2>{pageTitle}</h2>
                {this.renderIcon(rightIcon, rightIconClick)}
            </div>
        </div>;
    }

    renderIcon(IconName, IconAction) {
        if (IconName) {
            return <i onClick={IconAction} className='material-icons'>{IconName}</i>;
        }
        return ;
    }
}

export default NavBar;