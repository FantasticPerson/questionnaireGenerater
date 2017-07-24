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
        return (
            <div className="edit-container">
                <SlideComponents dispatch={this.props.dispatch}/>
                <PaperComponent dispatch={this.props.dispatch}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(Edit);