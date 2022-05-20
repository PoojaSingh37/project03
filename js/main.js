let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date("6 july 2022");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000 ) % 60;

daysItem.innerHTML = days;
hoursItem.innerHTML = hours;
minItem.innerHTML = min;
secItem.innerHTML = sec;
}

countDown()
 setInterval(countDown,1000)

 function scrollTopBack(){
     let scrollTopButtom = document.querySelector("#scrollUp");
     window.onscroll = function (){
         var scroll = document.documentElement.scrollTop;
         if(scroll >= 250){
            scrollTopButtom.classList.add('scrollActive');
         }
         else{
             scrollTopButtom.classList.remove('scrollActive');
         }
     }
 }
scrollTopBack();

let navBar = document.querySelectorAll('.nav-link');
let navCollaspe = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollaspe.classList.remove("show");
    })
})