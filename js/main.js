/*
  carousel on heading page starts
*/
var myIndex = 0;


function carousel() {
    var i;

    var x = document.getElementsByClassName("heading");

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    unfade( x[myIndex-1] );
    x[myIndex-1].style.display='block';
    //x[0].style.display='block';
    setTimeout(carousel, 7000); // Change imag seconds
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function showSub(idnum) {
  var element = document.getElementById('main-menu-' + idnum);
  element.className += " " + 'is-visible';
}

function toggleSub() {
  var acc = document.getElementsByClassName("link-2");

  for (var i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {

        var activeMenu = document.getElementsByClassName("active");
        if ( activeMenu.length > 0 ) {
            if ( activeMenu[0].innerHTML != this.innerHTML ) {
              activeMenu[0].className = "link-2";
              this.className += " " + "active";
            } else {
              this.className = "link-2";
            }
          } else {
            this.className += " " + "active";
          }
         var mobileActive = document.getElementById("main-menu-" + this.getAttribute("data-id"));
         var abb = document.getElementsByClassName("is-visible");

          if(abb.length > 0){
            if( abb[0].getAttribute("id") !== "main-menu-" + this.getAttribute("data-id") ){
               abb[0].classList.toggle("is-visible");
            }
          }

        if( mobileActive ){
          mobileActive.classList.toggle("is-visible");
        }
    }
  }
}

function hideSub(idnum) {
  var element = document.getElementById('main-menu-' + idnum);
}
/*
  carousel ends here
  */
/* price list start */
function priceToggler() {
  var acc = document.getElementsByClassName("toggle-down");
  var i;



  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          this.nextElementSibling.classList.toggle("toggle-visible");
          this.parentElement.classList.toggle("readmore-expander");
          this.parentElement.parentElement.parentElement.classList.toggle("readmore-expander");
      }
  }
}
/* price list ends */
/*
  - accordion starts
*/
function according() {
  var acc = document.getElementsByClassName("accordion");
  var i;



  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          removeClass(acc, this);
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
      }
  }

  function removeClass(acc, activeObj) {
    for (i = 0; i < acc.length; i++) {
      if(acc[i].innerHTML != activeObj.innerHTML) {
        acc[i].className = "accordion";
        acc[i].nextElementSibling.className = "panel";
      }
    }
    return true;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  carousel();
  according();
  toggleSub();
  priceToggler();
  document.getElementById("show-menu").addEventListener("change", function (){
      var acc = document.getElementsByClassName("accordion");
          for (i = 0; i < acc.length; i++) {
            acc[i].className = "accordion";
            acc[i].nextElementSibling.className = "panel";
          }
    }, true);
});
