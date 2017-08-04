import React,{Component,PropTypes} from 'react'
import StarProgress from './starProItem'
import EditableDiv from '../../../../components/editableDiv'
import EditTools from '../editTools'
import {updateQItemData} from '../../../../actions/question'

export default class Marking extends Component{
    constructor(){
        super();
        this.state = {showAddBtn:false}
    }

    componentDidMount(){
        const {id} = this.props;
        const {editTool} = this.refs;
        editTool.setQid(id);
    }

    render(){
        const {data} = this.props;
        const {showAddBtn} = this.state;
        let startItems = data.options.map((item,index)=>{
            return (
                <div key={index} style={{
                        margin: '5px 0 5px 5px',
                        height: '30px',
                        lineHeight: '30px'
                }}>
                    <EditableDiv style={{
                        display:'inline-block'
                    }}/>
                    <StarProgress style={{
                        display:'inline-block'                        
                    }}/>
                </div>
            )
        })
        var style = {
            display: 'block',
            padding: '5px',
            lineHeight: '30px',
            position: 'relative',
            width: '799px'
        }
        return (
            <div style={{
                backgroundColor: '#FFF',
                marginTop: '10px'
            }}>
                <div style={{
                    width: '50px',
                    height: '152px',
                    display: 'inline-block',
                }}>
                    <EditTools dispatch={this.props.dispatch} ref="editTool"/>
                </div>
                <div  onMouseEnter={(e)=>{
                        this.setState({showAddBtn:true})
                    }} onMouseLeave={(e)=>{
                        this.setState({showAddBtn:false})
                    }} style={{
                    display: 'inline-block',
                    verticalAlign: 'top',
                    borderLeft: '1px solid rgb(238, 238, 238)',
                    paddingBottom:'0px',
                    minHeight:'152px'
                }}>
                    <EditableDiv style={style} value={data.title}/>
                    {startItems}
                    <div onClick={()=>{
                            this.addOption(); 
                        }} className={"componetEditAdd"} style={{visibility:showAddBtn?'visible':'hidden'}}></div>
                </div>
            </div>
        )
    }

    addOption(){
        const {id} = this.props;
        let data = this.props.data;
        data.options.push("默认文本");
        this.props.dispatch(updateQItemData(id,data))
    }
}