import React, {Component} from 'react';
import NavBar from './nav_bar';
import TitleBar from './title_bar';
import {connect} from 'react-redux';
import {createQuestion} from '../actions';

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
                rightIconClick = {this.onFormSubmit.bind(this)}
                leftIcon='arrow_back'
                leftIconClick={() => this.props.history.goBack()}
            />
            <TitleBar
                noShadow
                autoFocus
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

    onFormSubmit() {
        const {values} = this.props.form.TitleBarForm;
        const input = document.querySelector('.title-bar input').value;
        
        if (input !== '') {
            this.props.createQuestion(values, () => {
                this.props.history.push('/');
            });
        } else {
            alert('不好意思，标题是必须填的');
        }
    }
}

function mapStateToProps({form}) {
    return {form};
}

export default connect(mapStateToProps, {createQuestion})(QuestionNew);