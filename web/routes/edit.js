/**
 * Created by wdd on 2017/7/21.
 */
import Edit from '../containers/edit/index'

const editPage = {
    path: 'Edit',
    component: Edit,
    onEnter: (nextState, replace, cb) => {
        cb();
    },
    onLeave: ()=> {
        console.log("demoPage leave");
    }
};

export default editPage;