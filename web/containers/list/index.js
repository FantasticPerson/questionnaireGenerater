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
        return(
            <div className="list-container">
                <Item dispatch={this.props.dispatch}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(List);