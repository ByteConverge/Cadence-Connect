const form = document.getElementById('myForm');
const inputWrap = document.querySelector(".inputWrap");
const email = document.getElementById('email');
const password = document.getElementById('password');
const container = document.querySelector(".container")
const main = document.querySelector("main");



let errorMessageEmail = document.createElement("h2");
errorMessageEmail.style.cssText = "color:red; font-size:10px ; height: 8%; text-align:left;"

// Successful Log In Message!!!

let successMessage = document.createElement("div");
successMessage.style.cssText = "border:1px solid black ; height:10vh ; width:30% ; display:grid; place-items:center; padding:5px"

     

     



// VALIDATION EVENT Listeners

email.addEventListener("blur",()=>{
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.value)) {
       errorMessageEmail.textContent = " Please enter a valid email address."
       inputWrap.insertBefore(errorMessageEmail , email.nextElementSibling)
   
       isValid = false;  
       
    }else{
        errorMessageEmail.remove();
    }

})



    
form.addEventListener('submit', (event) => {
 event.preventDefault(); 


 // Validation checks
 let isValid = true;



 // Email validation (check for @ and .)
 const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if (!emailRegex.test(email.value)) {
    isValid = false;    
 }


 if (isValid) {
    container.insertBefore(successMessage , main);
    successMessage.innerHTML = "Authentication in Progress...";
    container.insertBefore(successMessage , main)
    setTimeout(()=>{
        successMessage.innerHTML = "Logged In";
        setTimeout(() => {
            successMessage.remove();
            setTimeout(() => {
                // window.location.assign("../../html and css files/vendorDashboard.html") 
                window.location.href = "../vendorDashboard.html"
             }, 2000);
        }, 1000);
    },3000)
 }
});
