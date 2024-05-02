const form = document.getElementById('myForm');
const inputWrap = document.querySelector(".inputWrap");
const fullName = document.getElementById('fullName');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const container = document.querySelector(".container");

// validation messages
let errorMessage= document.createElement("p");
let errorMessageEmail = document.createElement("p");
let errorMessageContact = document.createElement("p");
let errorMessagePwd = document.createElement("p");
// succcess message
let successMessage = document.createElement("div")
   successMessage.innerHTML = "Form submitted successfully!!"
   successMessage.style.cssText = "position: absolute; z-index:1000 ; padding:10px; background:white; height:10vh; align-self:center; top:-20px; font-size:1.5rem; display:grid; place-items:center;border:1px solid green "
//  Error Message  
let errorPwdMessage = document.createElement("div")
   errorPwdMessage.innerHTML = "Passwords do not match!"
   errorPwdMessage.style.cssText = "position: absolute; z-index:1000 ; padding:10px; background:white; height:10vh; align-self:center; top:-20px; font-size:1.5rem; display:grid; place-items:center;border:1px solid red "

// Validation EVENT LISTENERS

// email validation

email.addEventListener("blur" , ()=>{

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.value)) {
       errorMessageEmail.textContent = " Please enter a valid email address."
       inputWrap.insertBefore(errorMessageEmail , email.nextElementSibling)   
    }else{
        errorMessageEmail.remove();
    }
})

// Password length validation
password.addEventListener("keyup" , ()=>{
    if (password.value.length < 8) {
        errorMessagePwd.textContent = " Password must be at least 8 characters long."
        inputWrap.insertBefore(errorMessagePwd , password.nextElementSibling)
   
        isValid = false;
    }else{
        errorMessagePwd.remove();
    }

})

// Passwords match check





form.addEventListener('submit', (event) => {
 event.preventDefault(); 


 // Validation checks
 let isValid = true;

 // Full name validation 
 if (fullName.value.trim() === '' ) {
    
     errorMessage.textContent = "Please enter your full name."
       inputWrap.insertBefore(errorMessage , fullName.nextElementSibling)
   
     isValid = false;
 }else{
     errorMessage.remove();
 }
  

//  Email validation (check for @ and .)
 const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if (!emailRegex.test(email.value)) {
    isValid = false;  
    
 }

//  Password validation (example: check for minimum length)
 if (password.value.length < 8) {
     isValid = false;
 }

 // Passwords match check
 if (confirmPassword.value !== password.value) {
     isValid = false;
     
     password.value = null;
     confirmPassword.value = null;
     container.insertBefore(errorPwdMessage , form)  
     setTimeout(()=>{
         errorPwdMessage.remove();
        },3000)                           ;
 }

 if (isValid) {
     
     container.insertBefore(successMessage , form)
  
 }
});
