/**
 * Created by wdd on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react'
import PaperItemHead from './paperItemComponents/paperItemHead'
import Describe from './paperItemComponents/discribe'
import Choose from './paperItemComponents/choose'
import FillItem from './paperItemComponents/fillItem'
import MultiFillItem from './paperItemComponents/multiFillItem'
import {addNewQuesItem} from '../../../actions/question'

export default class PaperComponent extends Component{
    constructor(){
        super();
        this.state={items:[]};
    }

    render(){
        const {data,dispatch} = this.props;
        return (
            <div className="paperComponent-container" onDragOver={(e)=>{
                e.preventDefault();
                }} onDrop={e=>{
                    this.onItemDrop(e.dataTransfer.getData("text/plain"));
                }}>
                <PaperItemHead data={data.title} dispatch={dispatch}/>
                {this.renderComponents()}
            </div>
        )
    }

    renderComponents(){
        const {cid} = this.props;
        let itemsData = this.props.data.questions;
        itemsData = itemsData.sort(function(item1,item2){
            return item1.id - item2.id;
        });
        let items = itemsData.map((item,index)=>{
            if(item.type == "1"){
                return <Describe data={item.data} id={item.id} cid={cid} key={index} dispatch={this.props.dispatch}/>
            } else if(item.type == "2"){
                return <Choose isCheck={true} data={item.data} id={item.id} cid={cid} key={index} dispatch={this.props.dispatch}/>
            } else if(item.type == "3"){
                return <Choose isCheck={false} data={item.data} id={item.id} cid={cid} key={index} dispatch={this.props.dispatch}/>
            } else if(item.type == "4"){
                return <FillItem data={item.data} id={item.id} cid={cid} key={index} dispatch={this.props.dispatch}/>
            } else if(item.type == "5"){
                return <MultiFillItem data={item.data} id={item.id} cid={cid} key={index} dispatch = {this.props.dispatch}/>
            }
        })
        return items;
    }

    renderComponentItem(){
        const {items} = this.state;
        let outItems = items.map((item,index)=>{
            return <Describe key={index} dispatch={this.props.dispatch}/>
        });
        return outItems;
    }
    onItemDrop(type){
        console.log(type);
        let items = this.state.items;
        items.push(type);
        this.setState({items:items});
        this.props.dispatch(addNewQuesItem(type));
    }
}