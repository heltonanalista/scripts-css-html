function insert(num){
var value=document.getElementById("result").innerHTML;
document.getElementById("result").innerHTML=value+num

}
function clean(){
    document.getElementById("result").innerHTML="";

}
function back(){

    var value=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=value.substring(0,value.length-1)
}

function calculator(){
var value=document.getElementById("result").innerHTML

if(value){

    document.getElementById("result").innerHTML=eval(value)

}
}