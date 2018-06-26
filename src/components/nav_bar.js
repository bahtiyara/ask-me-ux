import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        let boxShadow = '0 2px 4px 0 rgba(0,0,0,0.20)';
        if (this.props.noShadow) {
            boxShadow = '';
        }
        return <div
            style={{boxShadow}}
            className='nav-bar'>
            <div className='container'>
                {this.renderIcon(this.props.leftIcon, this.props.leftIconClick)}
                <h1>{this.props.pageTitle}</h1>
                {this.renderIcon(this.props.rightIcon, this.props.rightIconClick)}
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