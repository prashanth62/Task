document.getElementById("number").innerHTML=Number("111") +"<br>"+ Number("")

let a=57;
let b=67.8;
document.getElementById("String").innerHTML=String(a) +"<br>"+ String(b)

let x=new Date();
let y=x.getTime();
document.getElementById('Date').innerHTML=x;
document.getElementById('DateN').innerHTML=y;

document.getElementById("Display").innerHTML =
(10 + null) + "<br>"  +
("6" + null) + "<br>" +
("12" + 2) + "<br>" +
("14" - 2) + "<br>" +
("4" * "2") + "<br>" +
("6.5" / "2") + "<br>"