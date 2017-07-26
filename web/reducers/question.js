import * as ActionTypes from '../constants/ActionTypes';
import {actionPayloadReducer, nullReducer} from '../utils/reducer-helper';

export const questionnare = {
    [ActionTypes.update_question_nare]:actionPayloadReducer
}

export const questionCid = {
    [ActionTypes.update_question_cid]:actionPayloadReducer
}