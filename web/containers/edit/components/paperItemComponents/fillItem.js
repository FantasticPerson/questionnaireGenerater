import React,{Component,PropTyps} from 'react'
import EditableDiv from '../../../../components/editableDiv'
import EditTools from '../editTools'

export default class FillItem extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        const {id} = this.props;
        const {editTool} = this.refs;
        editTool.setQid(id);
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
                }}>
                    <EditTools dispatch={this.props.dispatch} ref="editTool"/>
                </div>
                <div style={{
                    display: 'inline-block',
                    verticalAlign: 'top'
                }}>
                    <EditableDiv style={style} value={data.title}/>
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
            </div>
        )
    }
}