var input=document.getElementById("input")
var input_value=document.getElementById("input_value")
var insertbutton=document.getElementById("insertbutton")
 var display=document.getElementById("display")

insertbutton.onclick=function(){
    localStorage.setItem(input.value,input_value.value)
};
display.onclick=function(){
    var keys=Object.keys(localStorage);
    //document.getElementById("Retrive").innerHTML=keys;
    console.log(keys)
    for(var key of keys){
    //document.getElementById("Retrive").innerHTML=("key:"+key+":value:"+localStorage.getItem(key));
        console.log("key:"+key+":value:"+localStorage.getItem(key));
    }
}
// let key = document.getElementById("key");
// let value = document.getElementById("value");

// document.getElementById("insert").addEventListener("click", () => {
//   localStorage.setItem(key.value, value.value);
//   localStorage.getItem(key.value);
// });