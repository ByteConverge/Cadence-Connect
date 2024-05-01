const form = document.getElementById('myForm');
const inputWrap = document.querySelector(".inputWrap");
const fullName = document.getElementById('fullName');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

let errorMessage= document.createElement("p");
let errorMessageEmail = document.createElement("p");
let errorMessageContact = document.createElement("p");
let errorMessagePwd = document.createElement("p");
    
form.addEventListener('submit', (event) => {
 event.preventDefault(); 


 // Validation checks
 let isValid = true;

 // Full name validation 
 if (fullName.value.trim() === '') {
    
     errorMessage.textContent = "Please enter your full name."
       inputWrap.insertBefore(errorMessage , fullName.nextElementSibling)
   
     isValid = false;
 }else{
     errorMessage.remove();
 }
  

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
 if (password.value.length < 8) {
     errorMessagePwd.textContent = " Password must be at least 8 characters long."
     inputWrap.insertBefore(errorMessagePwd , password.nextElementSibling)

     isValid = false;
 }else{
     errorMessagePwd.remove();
 }

 // Confirm password validation (check if it matches password)
 if (confirmPassword.value !== password.value) {
    password.value = null;
    confirmPassword.value = null;
     alert('Passwords do not match.');
     isValid = false;
 }

 if (isValid) {
     
     alert('Form submitted successfully!');
     window.location.assign("../../html and css files/signUpRegisterVendor.html")
     // You can also use AJAX to submit the form data to a server-side script for further processing
 }
});
