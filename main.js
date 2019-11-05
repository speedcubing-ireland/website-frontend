// CONSTANTS ============================================================

const API_URL = `https://speedcubing-backend.herokuapp.com`



// Navbar ============================================================
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        var mobileDrop = document.getElementById("navMenu");
        mobileDrop.classList.toggle("is-active");
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        
        $target.classList.toggle('is-active');

      });
    });
  }

});

// mobileNavDrop.classList.toggle("");


// document.querySelectorAll('.navbar-dropdown').forEach(function(navbarLink){
//   navbarLink.addEventListener('click', function(){
//     console.log(YEET);
    
//     console.log(mobileNavDrop);
    
//     navbarLink.nextElementSibling.classList.toggle('');
//   })
// });



var mobileButton = document.querySelectorAll('.navbar-link') ;
  // document.getElementsByClassName('navbar-dropdown')[0].classList.toggle("open");
  console.log("plz work");

  function hideFunction() {
    console.log("plz workyeet");
    $('.has-dropdown').click(function(){
      var nextDiv =  element.next().find('.navbar-dropdown')
      console.log(nextDiv);
      nextDiv.classList.toggle('');
      
  });
    
  };

Array.from(mobileButton).forEach(function(element) {
  element.addEventListener('click', hideFunction);
});

// console.log(mobileNavDrop);
// mobileNavDrop.addEventListener("click", () => {
// //   mobileDrop.classList.toggle("");
  
//   // mobileNavDrop.classList.toggle("is-hidden");
// });


const burger = document.querySelector(".burger");
const nav = document.querySelector(`#${burger.dataset.target}`);

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});
// ============================================================
function modalSignup() {
  document.getElementById("signupModal").className += " is-active";
}

function closeFunction() {
  document.getElementById("signupModal").className += "modal";
}

// document.getElementById("register_form").onsubmit = e => {
//   e.preventDefault();
//   submitFunction();
//   return false;
// };

// function submitFunction() {
//   $.ajax({
//     url: API_URL + "/emails",
//     data: JSON.stringify({ email: document.getElementById("address").value }),
//     dataType: "json",
//     contentType: "application/json",
//     type: "POST",
//     success() {
//       const btn = document.getElementById("submit-btn");
//       btn.innerText = "Success!";
//       btn.disabled = true;

//       document.getElementById("address").disabled = true;
//       // elem.addEventListener("keypress", enterfunction);
//     }
//   });
// }
// // ============================================================
function modalContact() {
  document.getElementById("contactModal").className += " is-active";
}

function closeContact() {
  document.getElementById("contactModal").className += "modal";
}
// document.getElementById("contact_form").onsubmit = e => {
//   e.preventDefault();
//   submitContact();
//   return false;
// };

// function submitContact() {
//   $.ajax({
//     url: API_URL + "/contacts",
//     data: JSON.stringify({ email: document.getElementById("addresscont").value, name: document.getElementById("namecont").value, message: document.getElementById("messagecont").value }),
//     dataType: "json",
//     contentType: "application/json",
//     type: "POST",
//     success() {
//       const btn = document.getElementById("contact-btn");
//       btn.innerText = "Success!";
//       btn.disabled = true;
//       elem.addEventListener("keypress", enterfunction);
//     }
//   });
// }
//  ============================================================
