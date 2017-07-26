/**
 * Created by wdd on 2017/7/20.
 */
import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux';
import Item from "./components/item.js"

class List extends Component{
    constructor(){
        super()
    }

    render(){
        const {questions,dispatch} = this.props;
        var items = questions.map((item,index)=>{
            return <Item data={item} key={index} dispatch={dispatch}/>
        })
        return(
            <div className="list-container">
                {items}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions:state.questionnare.question
    }
}

export default connect(mapStateToProps)(List);