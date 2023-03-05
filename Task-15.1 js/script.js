function showmsg(){
    let x=document.getElementById("mail").value;
    let y=x.split("@");
    document.getElementById("demo").innerHTML="Hii-" +y[0];
}
function show(){
    var a=document.getElementById("password");
    if(a.type==="password"){
        a.type="text";
        document.getElementById("openeye").src="img_105370.png";
    }
    else{
        a.type="password";
        document.getElementById("openeye").src="openeye.jpeg";
    }
}