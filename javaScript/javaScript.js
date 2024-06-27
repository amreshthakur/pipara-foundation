
// Navbar sticky form when user scroll down then navbar will be top of the page opening 
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};
// Navbar sticky form when user scroll down then navbar will be top of the page closing 
//  ---------------------------------------------------------------------------------------------------

// Login-box , Signup-box validation and reqired password and name with valid form user page opening 


 // Get the modals by ID 
 var modalLogin = document.getElementById('Login-box');
 var modalSignup = document.getElementById('Signup-box');

 // When the user clicks anywhere outside of the modal, close it , If User want to close the model of login or Register 
 window.onclick = function (event) {
     if (event.target == modalLogin) {
         modalLogin.style.display = "none";
     }
     if (event.target == modalSignup) {
         modalSignup.style.display = "none";
     }
 }

 // Form validation for Sign-Up  Authentication
 document.getElementById('signupForm').addEventListener('submit', function (event) {
     var username = document.getElementById('signupUname').value;
     var email = document.getElementById('email').value;
     var password = document.getElementById('signupPassword').value;

     // Basic validation Authentication
     if (username === '' || email === '' || password === '') {
         alert('Please fill in all fields.');
         event.preventDefault();
         return false;
     }

     // Example for password strength (minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character)
     var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
     if (!passwordPattern.test(password)) {
         alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
         event.preventDefault();
         return false;
     }

     // Further validation for email can be added
 });

 // Form validation for Login
 document.getElementById('loginForm').addEventListener('submit', function (event) {
     var username = document.getElementById('loginUname').value;
     var password = document.getElementById('loginPassword').value;

     // Basic validation
     if (username === '' || password === '') {
         alert('Please fill in all fields.');
         event.preventDefault();
         return false;
     }

     // Example regex for password strength (minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character)
     var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
     if (!passwordPattern.test(password)) {
         alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
         event.preventDefault();
         return false;
     }

     // If validation passes, the form will be submitted
 });
 // Login-box , Signup-box validation and reqired password and name with valid form user page closing code 

//  ---------------------------------------------------------------------------------------------------