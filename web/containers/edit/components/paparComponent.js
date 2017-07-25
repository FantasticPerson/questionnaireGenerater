/**
 * Created by wdd on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react'
import PaperItemHead from './paperItemComponents/paperItemHead'
import Describe from './paperItemComponents/discribe'
import Choose from './paperItemComponents/choose'

export default class PaperComponent extends Component{
    constructor(){
        super();
        this.state={items:[]};
    }

    render(){
        return (
            <div className="paperComponent-container" onDragOver={(e)=>{
                e.preventDefault();
                }} onDrop={e=>{
                    this.onItemDrop(e.dataTransfer.getData("text/plain"));
                }}>
                <PaperItemHead dispatch={this.props.dispatch}/>
                <Describe dispatch={this.props.dispatch}/>
                <Choose dispatch={this.props.dispatch}/>
                {this.renderComponentItem()}
            </div>
        )
    }

    renderComponentItem(){
        const {items} = this.state;
        let outItems = items.map((item,index)=>{
            return <Describe key={index} dispatch={this.props.dispatch}/>
        });
        return outItems;
    }
    onItemDrop(type){
        let items = this.state.items;
        items.push(type);
        this.setState({items:items});
    }
}