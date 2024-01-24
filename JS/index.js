/// <reference types ="../@types/jquery" />

// ! >>>>>>>>>>> Section1 Home <<<<<<<<<<<<<

$('.openIcon').on('click',function(){
    $('.open').css('left','0')
})

$('.close').on('click', function(){
    $('.open').css('left','-270px')
})

let aboutOffset = $('.singer').offset().top

$(window).on('scroll', function(){
   
    let windowScroll = $(window).scrollTop();
    if (windowScroll > aboutOffset - 400) {
        $('.openIcon').css('color', '#000')
    }
    else{
        $('.openIcon').css('color', '#fff')
    }
    
})





// ! >>>>>>>>>>> Section1 Home <<<<<<<<<<<<<




// ? >>>>>>>>>>> Section2 Singer <<<<<<<<<<<<<

$('.singer1 .singerNum').on('click', () => {
    $('.singer1 p').slideToggle(500)
    $('.singer p').not('.singer1 p').slideUp(500)
})

$('.singer2 .singerNum').on('click', () => {
    $('.singer2 .bbb').removeClass('d-none')
    $('.singer2 p').slideToggle(500)
    $('.singer p').not('.singer2 p').slideUp(500)
    
})
$('.singer3 .singerNum').on('click', () => {
    $('.singer3 p').removeClass('d-none')
    $('.singer3 p').slideToggle(500)
    $('.singer p').not('.singer3 p').slideUp(500)
    
})
$('.singer4 .singerNum').on('click', () => {
    $('.singer4 p').removeClass('d-none')
    $('.singer4 p').slideToggle(500)
    $('.singer p').not('.singer4 p').slideUp(500)
    
})








$('.singer3 .singerNum').on('click', () => {
    $('.singer3 p').slideToggle(500)
})

$('.singer4 .singerNum').on('click', () => {
    $('.singer4 p').slideToggle(500)
})







// ? >>>>>>>>>>> Section2 Singer <<<<<<<<<<<<<






// ! >>>>>>>>>>> Section3 the date <<<<<<<<<<<<<

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let todayDate = new Date();

let secondsCounter = 60 - todayDate.getSeconds();
let minutesCounter = 60 - todayDate.getMinutes();
let hoursCounter = 24 - todayDate.getHours();
let daysCounter = 365 - todayDate.getDate();

minutes.innerHTML = minutesCounter
hours.innerHTML = hoursCounter
days.innerHTML = daysCounter

setInterval(() => {
    secondsCounter -= 1;
    seconds.innerHTML = secondsCounter;
    if(secondsCounter == 0){
        secondsCounter = 60;
        minutesCounter -=1;
        minutes.innerHTML = minutesCounter;
        if (minutesCounter == 0) {
            minutesCounter = 60;
            hoursCounter -= 1;
            hours.innerHTML = hoursCounter;
            if (hoursCounter == 0) {
                hoursCounter = 24;
                daysCounter -= 1;
                days.innerHTML = daysCounter
            }
        }
    }
},1000)

// ! >>>>>>>>>>> Section3 the date <<<<<<<<<<<<<




// * >>>>>>>>>>> Section4 Contact <<<<<<<<<<<<<

let myArea = document.getElementById('myArea')
let mySpan = document.getElementById('mySpan')
let maxlength = myArea.getAttribute('maxlength')

myArea.addEventListener('input', function(){
    mySpan.innerHTML = maxlength - this.value.length
    if (mySpan.innerHTML == 0) {
        mySpan.innerHTML = 'your available character finished'
    }
})

// * >>>>>>>>>>> Section4 Contact <<<<<<<<<<<<<







