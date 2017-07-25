/**
 * Created by wdd on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react'

export default class PaperItemHead extends Component{
    constructor(){
        super();
        this.state={
            title:"示例问卷",
            describe:"欢迎使用问卷网！这是一份示例问卷。",
            renderTitleP:true,
            renderDescribeP:true
        };
    }

    render(){
        return (
            <div className="paperItemHead-container">
                {this.renderTitle()}
                <div className="paperItemHead-down">
                    <div className="paperItemHead-left"/>
                    {this.renderDescribeP()}
                </div>
            </div>
        )
    }

    renderTitle(){
        const {renderTitleP} = this.state;
        if(renderTitleP){
            return (
                <div className="paperItemHead-title" onClick={(e)=>{
                    this.setState({renderTitleP:false});
                    }}>{this.state.title}</div>
            )
        }
        return (
            <div className="paperItemHead-title" style={{
                    backgroundColor:"#FDF9CD",
                    border:"1px solid #1C658B",
                    margin:'0px',
                    outline:'none',
                    padding:'16px 57px',
                    marginTop:'-1px',
                    marginLeft:'-1px'
                }} onBlur={(e)=>{
                    this.setState({title:e.currentTarget.innerText,renderTitleP:true})
                }} autoFocus contentEditable="true">{this.state.title}
            </div>
        )
    }

    renderDescribeP(){
        const {renderDescribeP} = this.state;
        return renderDescribeP ? (
            <p onClick={(e)=>{
                    this.setState({renderDescribeP :false})
                }}>{this.state.describe}</p>
        ) : (
            <input style={{
                    padding: "12px 10px",
                    paddingRight: "50px",
                    background: "#FDF9CD",
                    width: "745px",
                    border: "1px solid #1C658B",
                    fontSize:"18px",
                    lineHeight:"18px",
                    verticalAlign:"top",
                    textAlign:'left'
                }} type="text"  autoFocus className="paperItemHead-title" onClick={(e)=>{

                }} onBlur={(e)=>{
                    this.setState({describe:e.currentTarget.value,renderDescribeP:true})
                }} defaultValue={this.state.describe}/>
        );
    }
}