import {combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';

import QuestionsReducer from './reducer_questions';

export default combineReducers({
    questions: QuestionsReducer,
    form: FormReducer
});