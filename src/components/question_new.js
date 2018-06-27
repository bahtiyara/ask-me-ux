import React, {Component} from 'react';
import NavBar from './nav_bar';
import TitleBar from './title_bar';

class QuestionNew extends Component {
    componentDidMount() {
        document.querySelector('body').style.backgroundColor = '#303841';
    }

    render() {
        return <div className='question-new'>
            <NavBar
                noShadow
                rightIcon='save disabled'
                pageTitle=''
                leftIconClick={() => this.props.history.push('/')}
                leftIcon='arrow_back' />
            <TitleBar />
        </div>;
    }
}

export default QuestionNew;