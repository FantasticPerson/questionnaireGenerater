/**
 * Created by wdd on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react'

export default class ComponentItem extends Component{
    constructor(){
        super();
        this.types = [
            '0','1', '2','3','4','5','6','7','8','9','10','11','12','13','14'
        ]
    }

    render(){
        let type = String(this.props.type);
        let iconClass = '';
        let display="block";
        let name = '';
        if(type === this.types[0]){
            iconClass = "componentItem1";
            name="单选题";
        } else if(type === this.types[1]){
            iconClass = "componentItem2";
            name="多选题";
        }else if(type === this.types[2]){
            iconClass = "componentItem3";
            name="图片选择器";
            display="none"
        }else if(type === this.types[3]){
            iconClass = "componentItem4";
            name="填空题";
        }else if(type === this.types[4]){
            iconClass = "componentItem5";
            name="多项填空题";
        }else if(type === this.types[5]){
            iconClass = "componentItem6";
            name="排序题";
            display="none"
        }else if(type === this.types[6]){
            iconClass = "componentItem7";
            name="打分题";
        }else if(type === this.types[7]){
            iconClass = "componentItem8";
            name="文字投票题";
            display="none"
        }else if(type === this.types[8]){
            iconClass = "componentItem9";
            name="图片投票题";
            display="none"
        }else if(type === this.types[9]){
            iconClass = "componentItem10";
            name="矩阵选择题";
        }else if(type === this.types[10]){
            iconClass = "componentItem11";
            name="描述说明";
        }else if(type === this.types[11]){
            iconClass = "componentItem12";
            name="上传题题";
            display="none"
        }else if(type === this.types[12]){
            iconClass = "componentItem13";
            name="NPS题";
            display="none"
        }else if(type === this.types[13]){
            iconClass = "componentItem14";
            name="地址位置题";
            display="none"
        }else if(type === this.types[14]){
            iconClass = "componentItem15";
            name="分页";
            display="none"
        }
        return (
            <div style={{display:display}} className="componentItem-container" draggable onDragStart={e=>(function(e,text){
                    e.dataTransfer.setData('text/plain',text);
                })(e,iconClass)}>
                <div className={iconClass}/>
                {name}
            </div>
        )
    }
}