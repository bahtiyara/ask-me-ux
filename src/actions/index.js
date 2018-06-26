import axios from 'axios';

const ROOT_URL = 'https://dani-api.herokuapp.com/';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

export function fetchQuestions() {
    const request = axios.get(ROOT_URL);
    return {
        type: FETCH_QUESTIONS,
        payload: request
    };
}