import {combineReducers} from 'redux';

import QuestionsReducer from './reducer_questions';

export default combineReducers({
    questions: QuestionsReducer
});