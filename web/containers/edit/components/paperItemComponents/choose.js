import React,{Component,PropTypes} from 'react'
import CheckItem from './checkItem'
import RadioItem from './radioItem'
import EditTools from '../editTools'

export default class ChooseItem extends Component{
    constructor(){
        super();
        this.state={titleP:"默认文本",showTitle:true};
    }

    render(){
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
                    <EditTools/>
                </div>
                <div style={{
                    display: 'inline-block',
                    padding: '5px',
                    borderLeft: '1px solid #CCC'
                }}>
                    {this.renderTitle()}
                    <ul style={{
                        fontSize: "14px",
                        display: "inline-block",
                        width: "100%",
                        paddingLeft: "0",
                        listStyleType: "none"
                    }}>
                        {this.renderItem()}
                        {this.renderItem()}
                        {this.renderItem()}
                        {this.renderItem()}
                        {this.renderItem()}
                    </ul>
                </div>
            </div>
        )
    }

    renderEditTools(){
        return (
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        )
    }

    renderItem(){
        const {isCheck} = this.props;
        return isCheck ? <CheckItem/> : <RadioItem/>
    }

    renderTitle(){
        const {showTitle,titleP} = this.state;
        return showTitle ? (
            <p style={{
                padding: "5px 0 5px 0",
                lineHeight: "30px",
                position: "relative"
            }}>{titleP}</p>
        ) : (
            <input type="text" defaultValue={titleP}/>
        )
    }
}