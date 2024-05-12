const form = document.getElementById('myForm');
const inputWrap = document.querySelector(".inputWrap");
const fullName = document.getElementById('fullName');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const container = document.querySelector(".container");
const togglePassword = document.querySelector(".togglepwd");
const toggleConfirmPassword = document.querySelector(".togglepwd2")
// toggle password
togglePassword.addEventListener("click",()=>{
   if(password.type === "password"){
      password.type = "text"
   }else{
      password.type = "password";
   }
})
toggleConfirmPassword.addEventListener("click",()=>{
   if(confirmPassword.type === "password"){
      confirmPassword.type = "text"
   }else{
      confirmPassword.type = "password";
   }
})

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



// email validation

email.addEventListener("blur" , ()=>{

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.value)) {
       errorMessageEmail.textContent = " Please enter a valid email address."
       inputWrap.insertBefore(errorMessageEmail , email.nextElementSibling) ;
       let emalVal = email.value;
       email.value = null;
        
    }else{
        errorMessageEmail.remove();
    }
})

// Password length validation


// Passwords match check


// form.addEventListener("submit" , (e)=>{
//     e.preventDefault();
//     console.log("submitted")

// })






form.addEventListener('submit', (event) => {
 event.preventDefault(); 


 // Validation checks
 let isValid = true;

 // Full name validation 
 if (fullName.value.trim() === '' ) {
    event.preventDefault(); 
     errorMessage.textContent = "Please enter your full name."
       inputWrap.insertBefore(errorMessage , fullName.nextElementSibling)
   
     isValid = false;
 }else{
     errorMessage.remove();
 }
  

//  Email validation (check for @ and .)
 const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if (!emailRegex.test(email.value)) {
    event.preventDefault(); 
    let emalVal = email.value;
    email.value = null;
     
    // isValid = false;  
    
 }

//  Password validation (example: check for minimum length)
 if (password.value.length < 8) {
    event.preventDefault(); 
     isValid = false;
 }

//  Passwords match check
 if (confirmPassword.value !== password.value) {
    event.preventDefault(); 
     isValid = false;
     
     password.value = null;
     confirmPassword.value = null;
     container.insertBefore(errorPwdMessage , form)  
     setTimeout(()=>{
         errorPwdMessage.remove();
        },3000)                           ;
 }

 if (isValid) {
    event.preventDefault();


     class UserInfo{
        constructor(name , email , contact ,password , passwordConfirm) {
         this.name = name;
         this.email =email ;
         this.contact = contact;
         this.password = password; 
         this.passwordConfirm = passwordConfirm;
         
        }
        }
    
    let fullNameValue = fullName.value;
    let emailvalue = email.value;
    let contactValue = contact.value;
    let passwordValue =password.value ;;
    let passwordConfirmValue = confirmPassword.value;
    
     let user = new UserInfo(fullNameValue , emailvalue , contactValue ,passwordValue, passwordConfirmValue )
    
     fetch("https://cadence-connect.onrender.com/api/v1/users/sign-up",{
     method: 'POST',
     headers:{
        'content-Type':'application/json'
     },
     body: JSON.stringify(user)
     }).then(response =>{
        if(response.ok){
         window.location.replace("../../html and css files/clientLoggedIn.html")
        console.log("user signed up successfully")
        console.log(response)
        }else{
            console.log("signup failed")
        }
     }).catch(error=>{
        console.log("Error during signUp")
     })

     
     console.log(user)


 }
});
