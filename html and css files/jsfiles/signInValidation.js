const form = document.getElementById('myForm');
const inputWrap = document.querySelector(".inputWrap");
const email = document.getElementById('email');
const password = document.getElementById('password');



let errorMessageEmail = document.createElement("h2");
errorMessageEmail.style.cssText = "color:red; font-size:10px ; height: 10%; text-align:left;"

    
form.addEventListener('submit', (event) => {
 event.preventDefault(); 


 // Validation checks
 let isValid = true;



 // Email validation (check for @ and .)
 const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if (!emailRegex.test(email.value)) {
    errorMessageEmail.textContent = " Please enter a valid email address."
    inputWrap.insertBefore(errorMessageEmail , email.nextElementSibling)

    isValid = false;  
    
 }else{
     errorMessageEmail.remove();
 }

 // Password validation (example: check for minimum length)

 if (isValid) {
     
     alert('logged in');
    //  window.location.assign("../../html and css files/signUpRegisterVendor.html")
     // You can also use AJAX to submit the form data to a server-side script for further processing
 }
});
