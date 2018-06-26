import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers';
import QuestionIndex from './components/question_index';
import QuestionNew from './components/question_new';
import QuestionShow from './components/question_show';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<Provider store = {createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
            <Route path='/new' component={QuestionNew} />
            <Route path='/:id' component={QuestionShow} />
            <Route path='/' component={QuestionIndex} />
        </Switch>
    </BrowserRouter>
</Provider>, document.querySelector('.app'));