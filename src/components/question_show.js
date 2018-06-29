import React, {Component} from 'react';
import NavBar from './nav_bar';
import TitleBar from './title_bar';
import {fetchQuestion} from '../actions';
import {connect} from 'react-redux';

class QuestionShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchQuestion(id);
    }

    render() {
        const {question} = this.props;
        if (!question) {
            return <div>Loading...</div>;
        }

        return <div className='question-show'>
            <NavBar
                noShadow
                rightIcon='more_horiz'
                leftIcon='arrow_back'
                leftIconClick={() => this.props.history.push('/')}
            />
            <TitleBar
                autoFocus={false}
                title={question.title}
                desc={question.desc}
                onInputChange={() => this.onInputChange()}
            />
        </div>;
    }

    onInputChange() {
        console.log('haha');
    }
}

function mapStateToProps({questions}, ownProps) {
    const {id} = ownProps.match.params;
    return {
        question: questions[id]
    }
}

export default connect(mapStateToProps, {fetchQuestion})(QuestionShow);