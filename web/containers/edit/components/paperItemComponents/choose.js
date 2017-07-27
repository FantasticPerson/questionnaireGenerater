import React,{Component,PropTypes} from 'react'
import CheckItem from './checkItem'
import RadioItem from './radioItem'
import EditTools from '../editTools'
import EditableDiv from '../../../../components/editableDiv'
import {updateQItemData} from '../../../../actions/question'

export default class ChooseItem extends Component{
    constructor(){
        super();
        this.state = {showAddBtn:false}
    }

    render(){
        const {data} = this.props;
        const {showAddBtn} = this.state;
        var style = {
            padding: "5px 0 5px 0",
            lineHeight: "30px",
            position: "relative",
            width:'799px'
        }
        return (
            <div style={{
                width: '860px',
                backgroundColor: '#FFF',
                marginTop: '10px',
                fontSize:'18px'
            }}>
                <div style={{
                    width: '50px',
                    display: 'inline-block',
                    verticalAlign: 'top'
                }}>
                    <EditTools ref="editTool" dispatch={this.props.dispatch}/>
                </div>
                <div onMouseEnter={(e)=>{
                        this.setState({showAddBtn:true})
                    }} onMouseLeave={(e)=>{
                        this.setState({showAddBtn:false})
                    }} style={{
                    display: 'inline-block',
                    padding: '5px',
                    borderLeft: '1px solid #CCC'
                }}>
                    <EditableDiv value={data.title} style={style}/>
                    <ul style={{
                        fontSize: "14px",
                        display: "inline-block",
                        width: "100%",
                        paddingLeft: "0",
                        listStyleType: "none"
                    }}>
                        {this.renderItems()}
                    </ul>
                    <div onClick={()=>{
                            this.addOption(); 
                        }} className={"componetEditAdd"} style={{visibility:showAddBtn?'visible':'hidden'}}></div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        const {editTool} = this.refs;
        const {id} = this.props;
        editTool.setQid(id);
    }

    renderItems(){
        const {data,isCheck} = this.props;
        return data.options.map((item,index)=>{
            return isCheck ? <CheckItem value={item} key={index}/> : <RadioItem value={item} key={index}/>
        })
    }

    addOption(){
        const {id} = this.props;
        let data = this.props.data;
        data.options.push("默认文本");
        this.props.dispatch(updateQItemData(id,data))
    }
}