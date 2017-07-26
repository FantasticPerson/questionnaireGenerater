import React,{Component,PropTypes} from 'react'

export default class EditTools extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <ul style={{
                listStyleType:'none',
                width:'30px',
                padding:'0 10px'
            }}>
                <li>
                    <span className="componentMoveUp"></span>
                </li>
                <li>
                    <span className="componentMoveDown"></span>
                </li>
                <li>
                    <span className="componentCopy"></span>
                </li>
                <li>
                    <span className="componentDelete"></span>
                </li>
            </ul>
        )
    }
}