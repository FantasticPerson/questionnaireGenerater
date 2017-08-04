export default function getQuesItemData(type){
    if(type == "componentItem1"){
        return {
            type:'3',
            id:2,
            data:{
                title:'默认文本',
                options:[
                    "默认文本",
                    "默认文本",
                    "默认文本",
                    "默认文本"
                ],
                questions:[]
            }
        }
    } else if(type == "componentItem2"){
        return {
            type:'2',
            id:2,
            data:{
                title:'默认文本',
                options:[
                    "默认文本",
                    "默认文本",
                    "默认文本",
                    "默认文本"
                ],
                questions:[]
            }
        }
    } else if(type == 'componentItem4'){
        return {
            type:'4',
            id:1,
            data:{
                title:'填空题',
                options:[],
                questions:[]
            }
        }
    } else if(type == 'componentItem11'){
        return {
            type:'1',
            id:1,
            data:{
                title:'描述说明水电费',
                options:[],
                questions:[]
            }
        }
    }
}