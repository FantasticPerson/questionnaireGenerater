import * as actionHelper from '../utils/action-helper'
import * as ActionTypes from '../constants/ActionTypes'
import {cloneObj} from '../utils/functions'

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

export function moveQues(qid,dir){
    if(qid == 1 && dir == 'up'){
        return;
    }
    return (dispatch,getState)=>{
        let questions = getState().questionnare.question;
        let cid = getState().questionnare.cid;
        let item = questions.find(function(item){
            return item.id == cid;
        });
        if(item){
            let questionArr = item.questions;
            if(qid == questionArr.length && dir == 'down'){
                return;
            }
            let qItem = questionArr.find(function(item){return item.id == qid});
            if(qItem){
                if(dir == 'up'){
                    var preItem = questionArr.find(function(item){return item.id == qid-1});
                    if(preItem){
                        preItem.id = qid;
                        qItem.id = qid-1;
                    }
                } else if(dir == 'down'){
                    var nextItem = questionArr.find(function(item){return item.id == qid+1});
                    if(nextItem){
                        nextItem.id = qid;
                        qItem.id = qid+1;
                    }
                }
                dispatch(actionHelper.createPayloadAction(ActionTypes.update_question_nare,cloneObj(questions))); 
            }
        }
    }
}

export function copyQues(qid){
    return (dispatch,getState)=>{
        let questions = getState().questionnare.question;
        let cid = getState().questionnare.cid;
        let item = questions.find(function(item){
            return item.id == cid;
        });
        if(item){
            let questionArr = item.questions;
            let qItem = questionArr.find(function(item){return item.id == qid});
            if(qItem){
                let qItemCp = cloneObj(qItem);
                qItemCp.id = qid+1;
                let i = questionArr.length;
                while(i>qid){
                    let tItem = questionArr.find(function(item){return item.id == i});
                    tItem.id = i+1;
                    i--;
                }
                questionArr.push(qItemCp);
                dispatch(actionHelper.createPayloadAction(ActionTypes.update_question_nare,cloneObj(questions))); 
            }
        }
    }
}

export function delQues(qid){
    return (dispatch,getState)=>{
        let questions = getState().questionnare.question;
        let cid = getState().questionnare.cid;
        let item = questions.find(function(item){
            return item.id == cid;
        });
        if(item){
            let questionArr = item.questions;
            let qItem = questionArr.find(function(item){return item.id == qid});
            if(qItem){
                let i = questionArr.length;
                let index = qid+1;
                while(index <= i){
                    let tItem = questionArr.find(function(item){return item.id == index});
                    if(tItem){
                        tItem.id = tItem.id -1;
                    }
                    index++;
                }
                questionArr.splice(qid-1,1);
                dispatch(actionHelper.createPayloadAction(ActionTypes.update_question_nare,cloneObj(questions)));
            }
        }
    }
}


