let openBtns = document.querySelectorAll('.modal-open');

openBtns.forEach(function(btn){
    btn.ondblclick = function(){
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "block";
    }
})

let closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.closest('.modal').style.display = "none";
        
    }
})


let today = new Date();
let currentDay = today.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let currentMonth = months[today.getMonth()];
let currentYear = today.getFullYear();
let hour = today.getHours();
let min = today.getMinutes();
let now = document.querySelector('#currenthour')
now.innerHTML = `${currentMonth}, ${currentDay}th ${currentYear} - ${hour}:${min}`;


let openMenu = document.querySelectorAll('#startingmenu');
let menuBottom = document.querySelectorAll('#menuBtm');



$('#content2').resizable(
    {alsoResize: '#text2, #body2'}
);
$('#content1').resizable(
    {alsoResize: '#text1, #body1'}
);
$('.modal').draggable();




let tabContent = document.querySelectorAll('.tabcontent');
let tabLinks = document.querySelectorAll('.worklink');

function openWork(e, showcase){
    for(var i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
      }
    document.getElementById(showcase).style.display = "block";
    e.currentTarget.className += " active";
}


$('#startingmenu').click(function(){
    $('ul').toggle();
});

function close_window() {
    
        location.reload();
    
  }

  let menuUnder = document.querySelectorAll("#scdprog");
  

    menuUnder.addEventListener("mouseover", function(e){
       
        e.target.style.color = "purple";
    });


//const background = document.querySelector('.main-container');
//const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
 //   const body = document.querySelector('body')

  //  function changeBackground(e){
        
  //      const colorIndex= parseInt(Math.random()*colors.length)
//        body.style.changeBackground = colors[colorIndex]
  //  }

  //  background.addEventListener('click', changeBackground)


  