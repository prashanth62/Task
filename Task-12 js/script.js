let details =[];
function add(){
    details.unshift("<br><br>   Product id:  "+document.getElementById("id").value +"<br> Cost:$"+document.getElementById("cost").value+"<br> Item Description: "+document.getElementById("item").value+"<br> Date and Time: "+document.getElementById("datetime").value );
    console.log(details);
    document.getElementById("id").value='';
    document.getElementById("cost").value='';
    document.getElementById("item").value='';
    document.getElementById("datetime").value='';
}
function showmsg(){
    document.getElementById('alldetails').innerHTML=details;
    document.getElementById('alldetails').style.display='block'
}