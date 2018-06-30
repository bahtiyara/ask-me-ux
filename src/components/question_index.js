import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import NavBar from './nav_bar';
import {fetchQuestions} from '../actions';

class QuestionIndex extends Component {
    componentDidMount() {
        document.querySelector('body').style.backgroundColor = 'rgba(0,0,0,0)';
        this.props.fetchQuestions();
    }

    render() {
        return <div className='question-index'>
            <NavBar
                rightIcon='add'
                rightIconClick={() => this.props.history.push('/new')}
                pageTitle='Ask me UX'
            />
            <ul className='question-list container'>
                {this.renderListItem()}
            </ul>
        </div>;
    }

    renderListItem() {
        return _.map(this.props.questions, (question) => {
            return <li key={question._id} className='question-list-item'>
                <Link to={`/${question._id}`}>
                    <div className='wrapper'>
                        <h2>{question.title}</h2>
                        <p>{question.desc}</p>
                    </div>
                </Link>
            </li>;
        });
    }
}

function mapStateToProps({questions}) {
    return {questions};
}

export default connect(mapStateToProps, {fetchQuestions})(QuestionIndex);