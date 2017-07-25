import React,{Component,PropTypes} from 'react'

export default class Describe extends Component{
    constructor(){
        super();
        this.state={
            titleP:"描述说明",
            showTitleP:"true"            
        };
    }

    render(){
        return (
            <div style={{
                backgroundColor: '#FFF',
                marginTop: '10px'
            }}>
                <div style={{
                    width: '50px',
                    borderRight: '1px solid #eee',
                    height: '152px',
                    display: 'inline-block'
                }}></div>
                <div style={{
                    display: 'inline-block',
                    verticalAlign: 'top'
                }}>
                    {this.renderTitleP()}
                    <textarea style={{
                        marginLeft: '5px',
                        width: '300px',
                        height: '100px',
                        border: '1px solid #dbdbdb',
                        resize: 'none'
                    }}/>
                </div>
            </div>
        );
    }

    renderTitleP(){
        const {titleP,showTitleP} = this.state;
        return showTitleP ? (
            <p style={{
                display: 'block',
                padding: '5px',
                lineHeight: '30px',
                position: 'relative',
                width: '799px'
            }} onClick={(e)=>{
                this.setState({showTitleP:false})
            }}>{titleP}</p>
        ) : (
            <input style={{
                display: 'block',
                border: '1px solid #1C658B',
                background: '#FDF9CD',
                padding: '4px',
                fontSize: '18px',
                marginLeft: '5px',
                width: '789px',
                marginBottom:'5px'
            }} type="text" autoFocus defaultValue={titleP} onBlur={(e)=>{
                this.setState({showTitleP:true,titleP:e.currentTarget.value});
            }}/>
        );
    }
}