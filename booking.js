//hovering active
var header = document.getElementById("navbar");
var link = header.getElementsByClassName("menu");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
// login&signup
function SignIn(){
  let user = document.getElementById("signin");
  let change = location.replace("loginPage.html");
  user.appendChild(change)
}
function SignUp(){
  let user = document.getElementById("signin");
  let change = location.replace("registerUser.html");
  user.appendChild(change)
}


//header scroll
(function(){

    var doc = document.documentElement;
    var w   = window;

    /*
    define four variables: curScroll, prevScroll, curDirection, prevDirection
    */

    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    /*
    how it works:
    -------------
    create a scroll event listener
    create function to check scroll position on each scroll event,
    compare curScroll and prevScroll values to find the scroll direction
    scroll up - 1, scroll down - 2, initial - 0
    then set the direction value to curDirection
    compare curDirection and prevDirection
    if it is different, call a function to show or hide the header
    example:
    step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
    */

    var header = document.getElementById('site-header');
    var toggled;
    var threshold = 50;

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }
    };

    var toggleHeader = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            header.classList.add('hide');
        }
        else if (curDirection === 1) {
            header.classList.remove('hide');
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener('scroll', checkScroll);

})();

//hamburger dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#hamburg')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  //displaying button on selecting option from dropdown
  // function selectOption() {
  //   document.getElementById("next").classList.toggle("showButton");
  // }
  function enableButton() {
    var all_statuses = document.body.querySelectorAll(".selectLocation > .control");
    // var option_one = "select_location";
    var option_one = "thimphu";
    var option_two = "phuntsholing";
    // var option_two = "complete";
    // for (var i = 0; i < all_statuses.length; i++) {
      // console.log(i + " This will work")
      if (all_statuses.value == option_one ) {
        // document.getElementById("btn_completed").disabled = true;
        document.getElementById("next").classList.toggle("showButton");
      }else if(all_statuses.value == option_two){
        document.getElementById("next").classList.toggle("showButton");
      }else
      document.getElementById("next").classList.toggle("next");
      // } else document.getElementById("btn_completed").disabled = false;
    // }
  }

  /////////////////////////////////////////////////////////////////////////////////
  function serviceDrop() {
    document.getElementById("serviceDropdown").classList.toggle("showLocation");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#dropServ')) {
      var dropdownss = document.getElementsByClassName("service-content");
      var x;
      for (x = 0; x < dropdownss.length; x++) {
        var openDropdownn = dropdownss[x];
        if (openDropdownn.classList.contains('showLocation')) {
          openDropdownn.classList.remove('showLocation');
        }
      }
    }
  }
  //selecting SP from p/ling
  function location_phuntsholing() {
      let e = document.getElementById('phuntsholing');
      let location = document.getElementById('locations')
      let bbtn = document.getElementById('backBtn')
      location.innerHTML= "Phuntsholing";
      let text = document.getElementById('text-pling')
      let p=document.getElementById("serviceDropdown");
      let img = document.getElementById("dropServ")
          if (img.style.display === "none") {
              img.style.display = "block";
          } else {
              img.style.display = "none";
              p.style.display = "none";
              text.style.display = "block";
              bbtn.style.display = "block";
              e.style.display = "block";

          }
      // e.classList.toggle("showPling")
   }

   function location_thimphu() {
      let f = document.getElementById('thimphu');
      let loc = document.getElementById('locations')
      let btn = document.getElementById('backBtn')
      loc.innerHTML="Thimphu";
      let txt = document.getElementById('text-tphu')
      let t = document.getElementById("serviceDropdown");
      let i = document.getElementById("dropServ")
          if (i.style.display === "none") {
              i.style.display = "block";
          } else {
              i.style.display = "none";
              t.style.display = "none";
              txt.style.display = "block";
              btn.style.display = "block";
              f.style.display = "block";
          }
   }