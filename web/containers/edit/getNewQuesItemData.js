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
    } else if(type == "componentItem5"){
        return {
            type:'5',
            id:1,
            data:{
                title:'多项填空题',
                options:[
                    "填空项一",
                    "填空项二",
                    "填空项三"
                ],
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