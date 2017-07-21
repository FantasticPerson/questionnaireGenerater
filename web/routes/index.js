/**
 * Created by dandan.wu on 16/9/13.
 */
import indexApp from '../containers/index'
import demoPage from './demoPage'
import formPage from './formPage'
import list from './list'
import edit from './edit'

const index = {
    path:'/',
    component:indexApp,
    onEnter:(nextState,replace,cb)=>{
        cb();
    },
    childRoutes:[
        demoPage,
        formPage,
        list,
        edit
    ]
};

export default index;