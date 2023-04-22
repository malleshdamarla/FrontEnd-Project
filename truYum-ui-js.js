function login() {
  var x = document.getElementById('user');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function signup() {
  var Y = document.getElementById('form1');
  if (Y.style.display === 'none') {
    Y.style.display = 'block';
  } else {
    Y.style.display = 'none';
  }
}

function login2() {
  var z = document.getElementById('form1');
  if (z.style.display === 'block') {
    z.style.display = 'none';
  } else {
    z.style.display = 'block';
  }
}

const eye = document.querySelector('eye');
const password = document.querySelector('#pass');

togglePassword.addEventListener('click', function (e) {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
})

function closeNav() {
  document.getElementById("user").style.width = "0";
}

function passwordfun() {
  var a = document.getElementById('pass').value
  //document.getElementById('res').innerHTML=a.length
  var len = a.length
  if (len == 0) {
    document.getElementById('res').innerHTML = ' '
  }
  else if (len <= 4) {
    document.getElementById('res').innerHTML = 'password is week '
    document.getElementById('ME').setAttribute("disabled", "true")
  }
  else if (len >= 5 && len <= 10) {
    document.getElementById('res').innerHTML = 'password is avareage '
  }
  else if (len >= 11 && len <= 15) {
    document.getElementById('res').innerHTML = 'password is Good '
    document.getElementById('ME').removeAttribute("disabled")
  }
  else {
    document.getElementById('res').innerHTML = 'password is strong '
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function refreshPage() {
  if (confirm("You successfully login, click:- OK")) {
    location.reload();
  }
}

function refreshPage1() {
  if (confirm("Your account successfully created , click:- OK")) {
    location.reload();
  }
}

