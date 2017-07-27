/**
 * Created by wdd on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react'
import SlideComponents from './components/slideComponents'
import PaperComponent from './components/paparComponent'
import {connect} from 'react-redux';

class Edit extends Component{
    constructor(){
        super()
    }

    render(){
        const {cid,questions,dispatch} = this.props;
        let questionData = questions.find((item)=>{
            return item.id == cid;
        })
        return (
            <div className="edit-container">
                <SlideComponents dispatch={this.props.dispatch}/>
                <PaperComponent dispatch={dispatch} data={questionData} cid={cid}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions:state.questionnare.question,
        cid:state.questionnare.cid
    }
}

export default connect(mapStateToProps)(Edit);