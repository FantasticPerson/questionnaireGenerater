import React,{Component,PropTypes} from 'react'
import EditableDiv from '../../../../components/editableDiv'

export default class CheckItem extends Component{
    constructor(){
        super();
    }

    render(){
        const {value} = this.props;
        let style = {
            display:"inline-block",
            margin:'0 5px'
        }
        return (
            <li style={{
                marginTop: "5px",
                padding: "5px 0",
                overflow: "hidden",
                fontSize: "14px"
            }}>
                <div>
                    <input type="checkbox" style={{
                        margin:'0 5px'
                    }}/><span><EditableDiv style={style} value={value || "默认文本"}/></span>
                </div>
            </li> 
        )
    }
}