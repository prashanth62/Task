function countstring(str,letter){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)==letter){
            count+=1;
        }
    }
    return count;
}
const string=prompt('Enter a String:');
//const upper=string.toUpperCase();
const letterToCheck=prompt('Enter a letter to check:');
const result=countstring(string, letterToCheck);
document.write(result);