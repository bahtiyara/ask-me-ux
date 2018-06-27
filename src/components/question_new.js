import React, {Component} from 'react';
import NavBar from './nav_bar';
import TitleBar from './title_bar';

class QuestionNew extends Component {
    componentDidMount() {
        document.querySelector('body').style.backgroundColor = '#303841';
        document.querySelector('.nav-bar i:last-child').classList.add('disabled');
    }

    render() {
        return <div className='question-new'>
            <NavBar
                noShadow
                rightIcon='save'
                pageTitle=''
                leftIconClick={() => this.props.history.push('/')}
                leftIcon='arrow_back' />
            <TitleBar
                onInputChange={() => this.onInputChange()}
            />
        </div>;
    }

    onInputChange() {
        const input = document.querySelector('.title-bar input').value;
        const ico = document.querySelector('.nav-bar i:last-child');
        if (input !== '') {
            ico.classList.remove('disabled');
        } else {
            ico.classList.add('disabled');
        }
    }
}

export default QuestionNew;