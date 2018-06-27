import axios from 'axios';

const ROOT_URL = 'https://dani-api.herokuapp.com/';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const FETCH_QUESTION = 'FETCH_QUESTION';

export function fetchQuestions() {
    const request = axios.get(ROOT_URL);
    return {
        type: FETCH_QUESTIONS,
        payload: request
    };
}

export function createQuestion(values, callback) {
    const request = axios.post(`${ROOT_URL}questions`, values).then(() => callback());
    return {
        type: CREATE_QUESTION,
        payload: request
    }
}

export function fetchQuestion(id) {
    const request = axios.get(`${ROOT_URL}questions/${id}`);
    return {
        type: FETCH_QUESTION,
        payload: request
    }
}