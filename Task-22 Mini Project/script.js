const wrapper=document.querySelector(".wrapper"),
inputPart=wrapper.querySelector(".input-part"),
infoTxt=inputPart.querySelector(".info-txt"),
inputField=inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button");
const apiKey='f720ee15fa8a1b282f5abe9e6e3a4a15';

let api;

inputField.addEventListener("keyup",e =>{
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
});

locationBtn.addEventListener("click",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        alert("Your Browser not support Geolocation api")
    }
})

function onSuccess(position){
    const {latitude, longitude}=position.coords;
    let api='https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}';
    fetchData();
}
function onError(error){
    infoTxt.innerText= error.message;
    infoTxt.classList.add("error")
}

function requestApi(city){
    let api='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
    fetchData();
}
function fetchData(){
    infoTxt.innerText ="Getting weather details...";
    infoTxt.classList.add("pending") ;
    fetch(api).then(response => response.json()).then(result => weatherDeatils(result))
};

function weatherDeatils(info){
     if(info.cod == "404"){
        infoTxt.innerText = `${inputField.value} isn't a valid city name`;
        infoTxt.classList.replace("pending", "error"); 
     }else{
        infoTxt.classList.remove("pending", "error");
     }
    console.log(info);
}