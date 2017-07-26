/**
 * Created by dandan.wu on 16/9/13.
 */
import {routerReducer} from 'react-router-redux'
import {nestCombineReducers, handleActionsReducor} from '../utils/reducer-helper';
import * as view from './view'
import * as question from './question'
import * as MockData from '../constants/mockData'

export const rootReducer = nestCombineReducers({
    routing:routerReducer,
    view:{
        overLayList:handleActionsReducor([],view.overLayList)
    },
    questionnare:{
        question:handleActionsReducor(MockData.MockQuestions,question.questionnare),
        cid:handleActionsReducor(null,question.questionCid)
    }
});

export default rootReducer;
