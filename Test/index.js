
const lodash = require("lodash");
let data = {
    name : "jaa",
}

let myId  = lodash.get(data, 'id', undefined);
console.log(myId, " =Check =")
if(typeof myId === 'undefined'){
    console.log(myId, " =undefined =")
}else{
    console.log(myId, " Not=undefined =")
}