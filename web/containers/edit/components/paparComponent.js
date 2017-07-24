/**
 * Created by wdd on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react'
import PaperItemHead from './paperItemComponents/paperItemHead'

export default class PaperComponent extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="paperComponent-container" onDragOver={(e)=>{
                e.preventDefault();
                }} onDrop={e=>{
                    this.onItemDrop(e.dataTransfer.getData("text/plain"));
                }}>
                <PaperItemHead dispatch={this.props.dispatch}/>
            </div>
        )
    }

    onItemDrop(type){
        console.log(type);
    }
}