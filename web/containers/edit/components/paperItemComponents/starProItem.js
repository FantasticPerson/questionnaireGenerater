import React,{Component,PropTyps} from 'react'

export default class StartProItem extends Component{
    constructor(){
        super();
        this.state = {progress:0,hover:false,tempProgress:0};
    }

    render(){
        const {progress,hover,tempProgress} = this.state;
        const {style} = this.props;
        let itemArr = [];
        let hoverNum = hover ? (tempProgress > progress ? tempProgress : progress) : progress;
        for(let i=0;i<5;i++){
            itemArr.push(<i key={i} onMouseEnter={()=>{
                    this.setState({tempProgress:i+1,hover:true});
                }} className="iconfont icon-xingxing101-copy" style={{fontSize:'25px',margin:'0 10px',color:i<hoverNum ? '#FCC460' :''}}></i>)
        }

        return (
            <div style={style} onMouseLeave={()=>{
                    this.setState({hover:false})
                }}>
                {itemArr}
            </div>
        )
    }
}