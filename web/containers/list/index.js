/**
 * Created by wdd on 2017/7/20.
 */
import React,{Component,PropTypes} from 'react'
import Item from "./components/item.js"

export default class List extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="list-container">
                <Item/>
            </div>
        )
    }

}