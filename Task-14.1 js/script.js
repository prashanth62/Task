function display(){
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("Array").innerHTML=fruits.toString();

}

function display1(){
    let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("join").innerHTML=fruits1.join("*");
}

function display2(){
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("pop1").innerHTML=fruits2;fruits2.pop();
document.getElementById("pop2").innerHTML=fruits2.toString();
}

function display3(){
    let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("push1").innerHTML=fruits3;fruits3.push("Kiwi");
document.getElementById("push2").innerHTML=fruits3.toString();
}

function display4(){
    let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("shift1").innerHTML=fruits4;fruits4.shift();
document.getElementById("shift2").innerHTML=fruits4.toString();
}

function display5(){
    let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("unshift1").innerHTML=fruits5;fruits5.unshift("Pineapple");
document.getElementById("unshift2").innerHTML=fruits5.toString();
}

function display6(){
    let fruits6 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("index1").innerHTML=fruits6;fruits6[0]='kiwi';
document.getElementById("index2").innerHTML=fruits6.toString();
}

function display7(){
    let fruits7 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("length1").innerHTML=fruits7;fruits7[fruits7.length]='kiwi';
document.getElementById("length2").innerHTML=fruits7.toString();
}

function display8(){
    let fruits8 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("delete1").innerHTML=fruits8;delete fruits8[0];
document.getElementById("delete2").innerHTML=fruits8.toString();
}

function display9(){
    let fruits9 = ["Banana", "Orange"];
    let fruits10=[ "Apple", "Mango"];
    let fruits11=fruits9.concat(fruits10);
document.getElementById("concat").innerHTML=fruits11;
}

function display10(){
    let fruits12 = ["Banana", "Orange"];
    let fruits13=[ "Apple", "Mango"];
    let fruits14=["pineapple","kiwi"]
    let fruits15=fruits12.concat(fruits13,fruits14);
document.getElementById("concat1").innerHTML=fruits15;
}

function display11(){
    let fruits16 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("slice").innerHTML=fruits16;fruits16.splice(2,0,"lemon","kiwi");
document.getElementById("slice").innerHTML=fruits16.toString();
}

function display12(){
    let fruits17 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("removeslice").innerHTML=fruits17;fruits17.splice(0,1);
document.getElementById("removeslice").innerHTML=fruits17.toString();
}

function display13(){
    let fruits18 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sort1").innerHTML=fruits18;fruits18.sort();
document.getElementById("sort2").innerHTML=fruits18.toString();
}

function display14(){
    let fruits19 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sort&reverse1").innerHTML=fruits19;fruits19.sort();fruits19.reverse();
document.getElementById("sort&reverse2").innerHTML=fruits19.toString();
}
function display15(){
    let num =[52,10,45,62,20,30];
    document.getElementById("numbersort").innerHTML=num;num.sort();
}
function display16(){
    let num1 =[52,10,45,62,20,30];
    document.getElementById("reversesort").innerHTML=num1;num1.reverse();
}
function display17(){
    let num1 =[52,10,45,62,20,30];
    document.getElementById("ascendingsort").innerHTML=num1.sort(function(a,b){
        return(a-b)
    })
}
function display18(){
    let num2 =[52,10,45,62,20,30];
    document.getElementById("descendingsort").innerHTML=num2 .reverse(function(a,b){
        return(a-b)
    })
}
