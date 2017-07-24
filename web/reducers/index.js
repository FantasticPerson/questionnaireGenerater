/**
 * Created by dandan.wu on 16/9/13.
 */
import {routerReducer} from 'react-router-redux'
import {nestCombineReducers, handleActionsReducor} from '../utils/reducer-helper';
import * as view from './view'

export const rootReducer = nestCombineReducers({
    routing:routerReducer,
    view:{
        overLayList:handleActionsReducor([],view.overLayList)
    }
});

export default rootReducer;
