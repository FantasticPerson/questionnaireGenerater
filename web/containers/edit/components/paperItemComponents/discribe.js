import React,{Component,PropTypes} from 'react'
import EditableDiv from '../../../../components/editableDiv'

export default class Describe extends Component{
    constructor(){
        super();
    }

    render(){
        const {data} = this.props;
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
                    borderRight: '1px solid #eee',
                    height: '152px',
                    display: 'inline-block'
                }}></div>
                <div style={{
                    display: 'inline-block',
                    verticalAlign: 'top'
                }}>
                    <EditableDiv style={style} value={data.title}/>
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
}