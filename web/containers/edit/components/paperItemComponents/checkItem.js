import React,{Component,PropTypes} from 'react'

export default class CheckItem extends Component{
    constructor(){
        super();
    }

    render(){
        const {value} = this.props;
        return (
            <li style={{
                marginTop: "5px",
                padding: "5px 0",
                overflow: "hidden",
                fontSize: "14px"
            }}>
                <label>
                    <input type="checkbox" style={{
                        margin:'0 5px'
                    }}/><span>{value || "默认文本"}</span>
                </label>
            </li> 
        )
    }
}