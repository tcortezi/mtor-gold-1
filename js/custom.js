
function countdown(endDate) {
  let days, hours, minutes, seconds;
  
  endDate = new Date(endDate).getTime();
  
  if (isNaN(endDate)) {
    return;
  }
  
  setInterval(calculate, 1000);
  
  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();
    
    let timeRemaining = parseInt((endDate - startDate) / 1000);
    
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      
      seconds = parseInt(timeRemaining);
      
      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
}

(function () { 
  countdown('02/08/2019 00:23:59 AM'); 
}());

// Modal


$(".video-btn").click(function() {
    $(".modal").addClass("is-active");
    $(".modal").addClass("is-clipped");
    $(this).scrollspy('refresh');
    $videoSrc = $(this).data( "src" );
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
});

$(".modal-close").click(function() {
    closeModals();
});

$(".modal").click(function() {
    closeModals();
});      

document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
});

function closeModals() {
    $(".modal").removeClass("is-active");
    $(".modal").removeClass("is-clipped");
    $("#video").attr('src',$videoSrc);
}



// Colapse

document.addEventListener('DOMContentLoaded', function() {
    let cardToggles = document.getElementsByClassName('card-toggle');
    for (let i = 0; i < cardToggles.length; i++) {
        cardToggles[i].addEventListener('click', e => {
            e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
        });
    }
});


