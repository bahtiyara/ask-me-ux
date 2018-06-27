import {FETCH_QUESTIONS, FETCH_QUESTION} from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_QUESTIONS:
            return _.mapKeys(action.payload.data, '_id');
        case FETCH_QUESTION:
            return {...state, [action.payload.data._id]:action.payload.data};
        default:
            return state;
    }
}