/**
 * Created by wdd on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react'

export default class PaperItemHead extends Component{
    constructor(){
        super();
        this.state={
            title:"示例问卷",
            describe:"欢迎使用问卷网！这是一份示例问卷。1234455667788",
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
                <p className="paperItemHead-title" onClick={(e)=>{
                    this.setState({renderTitleP:false});
                    }}>{this.state.title}</p>
            )
        }
        return (
            <div style={{padding: "2px 57px"}}>
                <input style={{
                    padding: "12px 10px",
                    paddingRight: "50px",
                    background: "#FDF9CD",
                    width: "700px",
                    border: "1px solid #1C658B",
                    fontSize:"18px",
                    lineHeight:"18px"
                }} type="text" autoFocus className="paperItemHead-title" onClick={(e)=>{

                }} onBlur={(e)=>{
                    this.setState({title:e.currentTarget.value,renderTitleP:true})
                }} defaultValue={this.state.title}/>
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
                }} type="text"  className="paperItemHead-title" onClick={(e)=>{

                }} onBlur={(e)=>{
                    this.setState({describe:e.currentTarget.value,renderDescribeP:true})
                }} defaultValue={this.state.describe}/>
        );
    }
}