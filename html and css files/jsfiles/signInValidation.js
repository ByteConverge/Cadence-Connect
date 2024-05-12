const form = document.getElementById('myForm');
const inputWrap = document.querySelector(".inputWrap");
const email = document.getElementById('email');
const password = document.getElementById('password');
const container = document.querySelector(".container")
const main = document.querySelector("main");
const togglePassword = document.querySelector(".togglepwd");

// Toggle Passsword
togglePassword.addEventListener("click",()=>{
   if(password.type === "password"){
      password.type = "text";
   }else{
     password.type = "password" ;
   }
})




let errorMessageEmail = document.createElement("h2");
errorMessageEmail.style.cssText = "color:red; font-size:10px ; height: 8%; text-align:left;"

// Error Message
let errorMessage = document.createElement("h2");
errorMessage.style.cssText = "color:red; font-size:10px ; height: 8%; text-align:left;"

// Bad request
let BadErrorMessage = document.createElement("h2");
BadErrorMessage .style.cssText = "color:red; font-size:10px ; height: 8%; text-align:left;"

// Successful Log In Message!!!

let successMessage = document.createElement("div");


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
   
   
     class UserInfo{
           constructor(email ,password ) {
            this.email =email ;
            this.password = password;  
           }
           }
       
   
       let emailvalue = email.value;
       let passwordValue =password.value ;;
   
       
        let user = new UserInfo( emailvalue , passwordValue )
       
        fetch("https://cadence-connect.onrender.com/api/v1/users/login",{
        method: 'POST',
        headers:{
           'content-Type':'application/json'
        },
        body: JSON.stringify(user)
        }).then(response =>{
           if(response.ok){
           setTimeout(() => {
            successMessage.innerHTML = "Logged In";
            successMessage.style.cssText = "border:1px solid black ; height:10vh ; width:30% ; display:grid; place-items:center; padding:5px ; color:green";
            container.insertBefore(successMessage , main)
            setTimeout(() => {
               window.location.assign("../../html and css files/vendorDashboard.html") 
            }, 1000);
           }, 800);
           console.log(response)
           }else{
            setTimeout(() => {
               errorMessage.innerHTML = "Wrong Email or Password";
               errorMessage.style.cssText = "border:1px solid black ; height:10vh ; width:30% ; display:grid; place-items:center; padding:5px;font-size:1rem;color:red"
               container.insertBefore(errorMessage , main)
               setTimeout(() => {
                 errorMessage.remove();
               }, 3000);
              }, 800);
            
           }
        }).catch(error=>{
         BadErrorMessage.innerHTML = "Error during Sign In"
         container.insertBefore(BadErrorMessage, main)
         BadErrorMessage.style.cssText = "border:1px solid black ; height:10vh ; width:30% ; display:grid; place-items:center; padding:5px;font-size:1rem;color:red"
         setTimeout(() => {
            BadErrorMessage.remove();
         }, 3000);
           
        })
   
        
        console.log(user)
   
    }});
