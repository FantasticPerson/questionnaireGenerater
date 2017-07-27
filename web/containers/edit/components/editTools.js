import React,{Component,PropTypes} from 'react'
import {moveQues,copyQues,delQues} from '../../../actions/question'

export default class EditTools extends Component{
    constructor(){
        super();
        this.qId = undefined;
    }

    setQid(id){
        this.qId = id;
    }

    render(){
        return (
            <ul style={{
                listStyleType:'none',
                width:'30px',
                padding:'0 10px'
            }}>
                <li onClick={e=>{this.move('up')}}>
                    <span className="componentMoveUp"></span>
                </li>
                <li onClick={e=>{this.move('down')}}>
                    <span className="componentMoveDown"></span>
                </li>
                <li onClick={e=>{this.copy()}}>
                    <span className="componentCopy"></span>
                </li>
                <li onClick={e=>{this.del()}}>
                    <span className="componentDelete"></span>
                </li>
            </ul>
        )
    }

    move(dir){
        this.props.dispatch(moveQues(this.qId,dir));
    }

    del(){
        this.props.dispatch(delQues(this.qId));
    }

    copy(){
        this.props.dispatch(copyQues(this.qId));
    }
}