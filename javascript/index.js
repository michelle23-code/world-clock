
function updateTime(){
 //Time for Los Angeles   
let losAngelesElement=document.querySelector("#los-angeles");
let losAngelesDateElement=document.querySelector(".date");
let losAngelesTimeElement =document.querySelector(".Time");
 let losAngelesTime = moment().tz("America/los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss[<small>]A[</small>.]");

//Time for paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".Time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format(
  "h:mm:ss[<small>]A[</small>.]"
);}
updateTime();
setInterval(updateTime,1000);