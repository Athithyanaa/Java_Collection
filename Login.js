let email1=""
let email2=""
let pass1=""
let pass2=""

let user=""

function Submit1(){
    email1 = document.getElementById('email_signup').value;
    pass1 = document.getElementById('pass_signup').value;
    user = document.getElementById('username').value;
        // Store values in localStorage
        localStorage.setItem('email1', email1);
        localStorage.setItem('pass1', pass1);

        localStorage.setItem('user',user);
}
function Submit(event) {
    // Prevent form from submitting
    event.preventDefault();

        user = localStorage.getItem('user');
        // Retrieve values from localStorage
        email1 = localStorage.getItem('email1');
        pass1 = localStorage.getItem('pass1');

    email2 = document.getElementById('email_login').value;
    pass2 = document.getElementById('password_login').value;

    if(email2 === "" || pass2 === "") {
        alert("Email or password fields cannot be empty.");
        return; 
    }
    if(email1 === "" || pass1 === ""){
        alert("Sign Up!")
        return;
    }
    if(email1 !== email2) {
        alert("Emails do not match.");
        return; 
    }

    if(pass1 !== pass2) {
        alert("Passwords do not match.");
        return; 
    }
    alert('Welcome! ' + user);
    window.location.href = "index.html";
}
