document.getElementById("copy").addEventListener('click', ()=>{
    let Copytext=document.getElementById("Copytext");
    navigator.clipboard.writeText(Copytext.value);
});
document.getElementById("paste").addEventListener('click', ()=>{
    let pastetext=document.getElementById("pastetext");
    pastetext.value='';
    navigator.clipboard.readText()
    .then((text)=>{
        pastetext.value=text;
    })
});
let textareas =document.querySelectorAll('textarea');
 clear.addEventListener('click',()=>{
        textareas.forEach(textarea=>textarea.value='');
    });



    