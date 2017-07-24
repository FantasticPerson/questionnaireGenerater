/**
 * Created by wdd on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react'
import ComponentItem from './componentItem'

export default class SlideComponents extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="slideComponent-container">
                {this.renderContents()}
            </div>
        )
    }

    renderContents(){
        let content=[];
        for(let i=0;i<15;i++){
            content.push(<ComponentItem type={i} key={i}/>)
        }
        return content;
    }
}