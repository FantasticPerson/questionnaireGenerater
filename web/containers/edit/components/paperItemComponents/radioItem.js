import React,{Component,PropTypes} from 'react'
import EditableDiv from '../../../../components/editableDiv'

export default class RadioItem extends Component{
    constructor(){
        super();
    }

    render(){
        let style = {
            display:"inline-block",
            margin:'0 5px'
        }
        const {value} = this.props;
        return (
            <li style={{
                marginTop: "5px",
                padding: "5px 0",
                overflow: "hidden",
                fontSize: "14px"
            }}>
                <label>
                    <input type="radio" value="value" name="radio" style={{
                        margin:'0 5px'
                    }}/><span><EditableDiv style={style} value={value || "默认文本"}/></span>
                </label>
            </li> 
        )
    }
}