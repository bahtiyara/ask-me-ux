import React, {Component} from 'react';
import NavBar from './nav_bar';
import TitleBar from './title_bar';
import {fetchQuestion} from '../actions';
import {connect} from 'react-redux';
import Card from './card';

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
                leftIconClick={() => this.props.history.goBack()}
            />
            <TitleBar
                initialValues={{
                    title: question.title,
                    desc: question.desc
                }}
            />
            <div className='answers container'>
                {this.renderAnswer()}
            </div>
        </div>;
    }

    renderAnswer() {
        const {question} = this.props;
        return question.answers.map((answer) => {
            return <Card style={{ marginBottom: 20 }} values={{
                avatarUrl: 'https://www.gstatic.com/webp/gallery/4.sm.jpg',
                title: '齐俊元',
                desc: '6月12日 12:31',
                content: answer,
                likedNum: 617
            }} />;
        });
    }
}

function mapStateToProps({questions}, ownProps) {
    const {id} = ownProps.match.params;
    return {
        question: questions[id]
    }
}

export default connect(mapStateToProps, {fetchQuestion})(QuestionShow);