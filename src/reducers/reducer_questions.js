import {FETCH_QUESTIONS} from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_QUESTIONS:
            return _.mapKeys(action.payload.data, '_id');
        default:
            return state;
    }
}