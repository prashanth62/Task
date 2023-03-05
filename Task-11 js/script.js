function Sqaure(){
    var a = document.getElementById('number').value
    var b = a*a;
    document.getElementById('showmsg').innerHTML= b;
}
function even_odd(){
    var num =document.getElementById('number').value;
    if((num%2) === 0){
        document.getElementById('showmsg').innerHTML="It is " +num+  " a even number"
    }
    else{
        document.getElementById('showmsg').innerHTML="It is " +num+  " a odd number"
    }
}
function CheckPrime(){
    let num1 =document.getElementById('number').value;
    let num2=0;
    if(num1==0 || num1==1)
    num2=1;
    for(var i=2;i<=num1/2;i++){
        if(num1%i ==0)
        num2=1;
    }
    if(num2==0){
        document.getElementById('showmsg').innerHTML="It is " +num1+  " a prime number";
    }
    else{
        document.getElementById('showmsg').innerHTML="It is " +num1+  " not a prime number";
    }
}
function CheckPalindrom(){
    let a=document.getElementById("number").value;
        let temp=0,r,rem;
        r=a;
        while(a>0){
            rem=a%10;
            temp=temp*10+rem;
            a=parseInt(a/10);
        }
        if(temp==r){
        document.getElementById("showmsg").innerHTML=r+"  is the polindrome number";
        }else{
        document.getElementById("showmsg").innerHTML=r+"  is not a polindrome number";
        }
}
function reverse(){
    let n=document.getElementById("number").value;
        var temp=0,rem;
        while(n>0){
            rem=n%10;
            temp=temp*10+rem;
            n=parseInt(n/10);
        }
        document.getElementById("showmsg").innerHTML=  temp +"  is the reverse number";
}
function CheckArmStrong(){
    var no=document.getElementById("number").value;
        var temp=0,rem,a,nod;
        a=no;
        nod=no.length;
        while(no>0){
            rem=no%10;
            temp=temp+rem**nod;
            no=parseInt(no/10);
        }
        if(temp==a){
            document.getElementById("showmsg").innerHTML= a+"  is an armstrong number";
        }else{    
            document.getElementById("showmsg").innerHTML= a+"  is not an armstrong number";
        }
}
function add(){
    var A=eval(document.getElementById("number1").value);
    var B=eval(document.getElementById("number2").value);
    document.getElementById("showmsg1").innerHTML="addition of "+A+"+"+B+" is ="+(A+B);
}
function sub(){
    var A=parseInt(document.getElementById("number1").value);
    var B=parseInt(document.getElementById("number2").value);
    document.getElementById("showmsg1").innerHTML=" subraction of "+A+"-"+B+" is ="+(A-B)
}
function mul(){
    var A =parseInt(document.getElementById("number1").value);
    var B=parseInt(document.getElementById("number2").value);
    document.getElementById("showmsg1").innerHTML=" multipication of  "+ A + "* " +B+ " is "+(A*B);
}
function div(){
    var A=parseInt(document.getElementById("number1").value);
    var B=parseInt(document.getElementById("number2").value);
    document.getElementById("showmsg1").innerHTML=" division of  "+ A + "/ " +B+ " is "+(A/B);
}
function mod(){
    var A=parseInt(document.getElementById("number1").value);
    var B=parseInt(document.getElementById("number2").value);
    document.getElementById("showmsg1").innerHTML=" modulus of  "+ A + "% " +B+ " is "+(A%B);
}