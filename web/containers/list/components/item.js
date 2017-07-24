/**
 * Created by wdd on 2017/7/20.
 */
import React,{Component,PropTypes} from 'react'
import {push} from 'react-router-redux';

export default class Item extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="list-item-container">
                {this.renderCreateBtn()}
                {this.renderContent()}
            </div>
        )
    }
    renderCreateBtn(){
        return;
        return (
            <div className="create-item-btn">
                <div className="create-item-btn-icon"/>
                新建
            </div>
        )
    }
    renderContent(){
        return (
            <div className="list-item-content-container">
                <p className="list-item-content-title" onClick={
                    (e)=>{

                    }
                }>示例问卷</p>
                <p className="list-item-content-time">16小时前</p>
                <div className="list-content-btn-container">
                    <div onClick={
                        (e)=>{
                            this.props.dispatch(push('edit'))
                        }
                    }>编辑</div>
                    <div>预览</div>
                </div>
            </div>
        )
    }

    editHandler(){

    }
}