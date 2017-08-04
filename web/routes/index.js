/**
 * Created by dandan.wu on 16/9/13.
 */
import indexApp from '../containers/index'
import list from './list'
import edit from './edit'

const index = {
    path:'/',
    component:indexApp,
    onEnter:(nextState,replace,cb)=>{
        cb();
    },
    childRoutes:[
        list,
        edit
    ],
    indexRoute: {
        onEnter: (nextState, replace)=>replace('/list')
    }
};

export default index;