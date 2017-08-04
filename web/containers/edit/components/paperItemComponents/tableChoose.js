import React,{Component,PropTypes} from 'react'
import EditableDiv from '../../../../components/editableDiv'
import EditTools from '../editTools'

export default class TableChoose extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        const {id} = this.props;
        const {editTool} = this.refs;
        editTool.setQid(id);
    }

    render(){
        const {row,col} = this.props.data.options;
        let trs = [];
        let tdStyle = {
            border:"1px solid #ccc",
            textAlign:'center',
            borderCollapse:'collapse',
            width:'150px',
            height:'40px'
        }
        for(let i=0;i<row.length+1;i++){
            let tds = [];
            console.log(col.length+1);
            for(let j=0;j<col.length+1;j++){
                if(i==0 &&　j> 0){
                    tds.push(<td style={tdStyle} key={j}>{col[j-1]}</td>)
                } else if(i>0 && j==0){
                    tds.push(<td style={tdStyle} key={j}>{row[i-1]}</td>)
                } else if(i == 0 && j==0){
                    tds.push(<td style={tdStyle} key={j}></td>)
                } else {
                    tds.push(<td style={tdStyle} key={j}><input type="radio"/></td>)
                }
            }
            trs.push(<tr key={i}>{tds}</tr>)
        }

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
                    <EditableDiv value={this.props.data.title} style={style}/>
                    <table>
                        <tbody>
                            {trs}
                        </tbody>
                    </table>                    
                </div>
            </div>
        )
    }
}