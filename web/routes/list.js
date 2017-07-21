/**
 * Created by wdd on 2017/7/21.
 */
import List from '../containers/list/index'

const list = {
    path: 'list',
    component: List,
    onEnter: (nextState, replace, cb) => {
        cb();
    },
    onLeave: ()=> {
        console.log("list leave");
    }
};

export default list;