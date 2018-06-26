import React, {Component} from 'react';

import NavBar from './nav_bar';

class QuestionIndex extends Component {
    render() {
        return <div className='question-index'>
            <NavBar
                rightIcon='add'
                rightIconClick={ () => this.props.history.push('/new')}
                pageTitle='设计问'/>
        </div>;
    }
}

export default QuestionIndex;