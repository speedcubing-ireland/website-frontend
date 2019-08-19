// CONSTANTS ============================================================

const API_URL = `https://speedcubing-backend.herokuapp.com`
const IMG_URL = `https://raw.githubusercontent.com/speedcubing-ireland/website-backend/master/public`


// Navbar ============================================================
$(function(){
  $("#nav-placeholder").load("nav.html");
});
function reload(){
  location.reload();
}

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

document.getElementById("register_form").onsubmit = e => {
  e.preventDefault();
  submitFunction();
  return false;
};

function submitFunction() {
  $.ajax({
    url: API_URL + "/emails",
    data: JSON.stringify({ email: document.getElementById("address").value }),
    dataType: "json",
    contentType: "application/json",
    type: "POST",
    success() {
      const btn = document.getElementById("submit-btn");
      btn.innerText = "Success!";
      btn.disabled = true;

      document.getElementById("address").disabled = true;
      // elem.addEventListener("keypress", enterfunction);
    }
  });
}
// ============================================================
function modalContact() {
  document.getElementById("contactModal").className += " is-active";
}

function closeContact() {
  document.getElementById("contactModal").className += "modal";
}
document.getElementById("contact_form").onsubmit = e => {
  e.preventDefault();
  submitContact();
  return false;
};

function submitContact() {
  $.ajax({
    url: API_URL + "/contacts",
    data: JSON.stringify({ email: document.getElementById("addresscont").value, name: document.getElementById("namecont").value, message: document.getElementById("messagecont").value }),
    dataType: "json",
    contentType: "application/json",
    type: "POST",
    success() {
      const btn = document.getElementById("contact-btn");
      btn.innerText = "Success!";
      btn.disabled = true;
      elem.addEventListener("keypress", enterfunction);
    }
  });
}
//  ============================================================
