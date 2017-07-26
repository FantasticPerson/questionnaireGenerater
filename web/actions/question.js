import * as actionHelper from '../utils/action-helper'
import * as ActionTypes from '../constants/ActionTypes'

export function updateQuestion(data){
    return (dispatch,getState)=>{
        let questions = getState().questionnare.question;
        let item = questions.find((item)=>{
            return item.id == data.id;
        });
        if(item){
            let index = questions.indexOf(item);
            questions[index] = data;
        } else {
            questions.push(data);
        }
        dispatch(actionHelper.createPayloadAction(ActionTypes.update_question_nare,questions)); 
    }
}

export function updateCid(id){
    return (dispatch)=>{
        dispatch(actionHelper.createErrorAction(ActionTypes.update_question_cid,id));
    }
}