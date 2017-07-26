/**
 * Created by wdd on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react'
import EditableDiv from '../../../../components/editableDiv'

export default class PaperItemHead extends Component{
    constructor(){
        super();
    }

    render(){
        const {data} = this.props;
        var style={
            textAlign: 'center',
            padding: '16px 50px 16px 57px',
            borderTop: '1px solid #eee'
        }
        var style2={
            display: "inline-block",
            verticalAlign: "top",
            lineHeight: "49px",
            padding: "0 5px",
            width: "799px"
        }
        return (
            <div className="paperItemHead-container">
                <EditableDiv value={data.name} style={style} ref="editDiv"/>
                <div className="paperItemHead-down">
                    <div className="paperItemHead-left"/>
                     <EditableDiv value={data.describe} style={style2} ref="editDiv2"/>
                </div>
            </div>
        ) 
    }
}