// function colorbg(){
//     var x=document.getElementById("Color");
//     var bgcolor=x.options[x.selectedIndex].value;
//     document.getElementById("box2").style.backgroundColor=bgcolor; 
// }
function changeColors(event){
    var color = event.value;
    document.getElementsByClassName('demo')
    [0].style.background=color;
}