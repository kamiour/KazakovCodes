function mySize(x) {

  if (x.matches) {
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky-mob")
      } else {
        header.classList.remove("sticky-mob");
      }
    }
  } else {
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky");
      }
    }
  }

}

var x = window.matchMedia("(max-width: 640px)")
mySize(x) // Call listener function at run time
x.addListener(mySize) // Attach listener function on state changes