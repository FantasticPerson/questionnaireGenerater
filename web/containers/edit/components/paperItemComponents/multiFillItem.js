import React,{Component,PropTypes} from 'react'
import EditableDiv from '../../../../components/editableDiv'
import EditTools from '../editTools'
import {updateQItemData} from '../../../../actions/question'

export default class MultiFillItem extends Component{
    constructor(){
        super()
        this.state = {showAddBtn:false}
    };

    componentDidMount(){
        const {id} = this.props;
        const {editTool} = this.refs;
        editTool.setQid(id);
    }

    render(){
        const {data} = this.props;
        const {options} = data;
        const {showAddBtn} = this.state;
        var style = {
            display: 'block',
            padding: '5px',
            lineHeight: '30px',
            position: 'relative',
            width: '799px'
        }
        
        let optionArr = options.map((item,index)=>{
            return (
                <div key={index}>
                    <EditableDiv style={style} value={item}/>
                    <textarea style={{
                        margin: '4px',
                        resize: 'none',
                        minHeight: '21px',
                        border: '1px solid #dbdbdb',
                        marginLeft: '5px',
                        outline:'none',
                        verticalAlign:'bottom',
                        color: '#666666',
                        fontSize: '14px',
                        lineHeight: '1.4',
                        width:'200px'
                    }}/>
                </div>
            )
        })
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
                    paddingBottom:'0px'
                }}>
                    {optionArr}
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