var obj1 = {"name":"Person1","age":5};
var obj2 = {"age":5,"name":"Person1"};

var data=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            data=false;
            break;
        }
    }
} 
else {
    data=false;
}
console.log("is object equal" +data);