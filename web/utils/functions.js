export function cloneObj(obj){
    let buf;
    if(obj instanceof Array){
        buf = [];
        var i = obj.length;
        while(i--){
            buf[i] = cloneObj(obj[i]);
        }
        return buf;
    } else if(obj instanceof Object){
        buf = {};
        for(var k in obj){
            buf[k] = cloneObj(obj[k]);
        }
        return buf;
    } else {
        return obj;
    }
}