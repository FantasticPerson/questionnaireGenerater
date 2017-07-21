/**
 * Created by wdd on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react'
import SlideComponents from './components/slideComponents'

export default class Eidt extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className="edit-container">
                <SlideComponents/>
            </div>
        )
    }
}