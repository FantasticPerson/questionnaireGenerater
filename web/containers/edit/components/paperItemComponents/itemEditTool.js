import React,{Component,PropTypes} from 'react'

export default class ItemEditTool extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <ul style={{
                    listStyleType:'none' 
                }}>
                    <li style={{display:"inline-block"}}>
                        <span className="componentMoveUp"></span>
                    </li>
                    <li style={{display:"inline-block"}}>
                        <span className="componentMoveDown"></span>
                    </li>
                    <li style={{display:"inline-block"}}>
                        <span className="componentDelete"></span>
                    </li>                    
                </ul>
            </div>
        )
    }
}