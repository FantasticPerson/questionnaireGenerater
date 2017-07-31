import React,{Component,PropTypes} from 'react'
import ItemEditTool from '../containers/edit/components/paperItemComponents/itemEditTool'

export default class EditableDiv extends Component{
    constructor(){
        super();
        this.state={value:'默认文本',isEdit:false}
    }

    componentDidMount(){
        const{value} = this.props; 
        this.setState({value:value|| "默认文本"});
    }

    render(){
        const {style} = this.props;
        const {value,isEdit} = this.state;
        var style2 = style ? {...style,backgroundColor:'#FDF9CD'} : {backgroundColor:'#FDF9CD'};
        if(isEdit){
            var cStyle={backgroundColor:""};
            return <div style={style2} contentEditable="true" autoFocus onBlur={(e)=>{
                            this.setState({value:e.currentTarget.innerText,isEdit:false});
                        }}>{value}</div>
            // <div style={{
            //         position:"relative",
            //         display:"inline-block"
            //     }}>
            //         <div style={style2} contentEditable="true" autoFocus onBlur={(e)=>{
            //                 this.setState({value:e.currentTarget.innerText,isEdit:false});
            //             }}>{value}</div>
            //              <div style={{
            //                 width: "90px",
            //                 border: "1px solid #ccc",
            //                 position: "absolute",
            //                 top: "-30px",
            //                 right: "0",
            //                 background: "#FFF"
            //             }}>
            //                 <ItemEditTool/>
            //             </div> 
            //      </div>
        } else {
            return <div style={style||{}} onClick={()=>{
                    this.setState({isEdit:true})
                }}>{value}</div>
        }
    }

    getValue(){
        return this.state.value;
    }
}

