//^ getting form & all inputes
let form=document.getElementById("form")
let username=document.getElementById("username")
let email=document.getElementById("email")
let Phone=document.getElementById("Phone")
let password=document.getElementById("password")
let confpassword=document.getElementById("confpassword")



// prevent the default work of submit and with validtion function
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validFunction();
  

})


    
    

//^checking function for Email
function isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
 
  

//& another way for
  //^checking function for Email  
// function isEmail(emailVal){
//     let att =emailVal.indexOf("@")
//     if(att<1)return false;
//     let dot=emailVal.lastIndexOf(".")
//     if(dot<=att+2 || dot===emailVal-1)return false;
//     return true ;
// }

//! making function to show the error message
function errorMessageFun(input,message){
    let small = input.parentElement.querySelector("small");
 
    small.textContent = message;
    input.parentElement.classList.remove("is-valid")
    input.parentElement.classList.add("is-invalid");
   
}


    //* making function to show the successful message
    function successfulMessageFun(input){
    let small = input.parentElement.querySelector("small");
    small.textContent =" successfully passed"
    input.parentElement.classList.remove("is-invalid")
    input.parentElement.classList.add("is-valid");
   
    }

   
  

//^ making function of validation
 function validFunction(){
//     //& to trim the white space at from te start and end input 
//     //& after trim we will make the validation on these new variables
 let usernameVal=username.value.trim()
let emailVal=email.value.trim()
let phoneVal=Phone.value.trim()
let passwordVal=password.value.trim()
let confpasswordVal=confpassword.value.trim()


// //~ making validation of userName
if(usernameVal===""){
    errorMessageFun(username,"username can't be blank")
}
else if(usernameVal.length <=2){
    errorMessageFun(username,"username must be more than 2 char")
    }
    else{
    successfulMessageFun(username)
 }

// //~ making validation of email
if(emailVal===""){
    errorMessageFun(email,"Email can't be blank")
    }
    else if( ! (isEmail(emailVal)) ){
        errorMessageFun(email,"Email is not valid")
        }
        else{
        successfulMessageFun(email)

        }

// //~ making validation of phone Number
if(phoneVal===""){
    errorMessageFun(Phone,"Phone Number can't be blank")
    }
    else if(  /^(011|012|015|010)[0-9]{8}$/.test(phoneVal) ){
      
        successfulMessageFun(Phone)
        }
        else{
         errorMessageFun(Phone,"Phone Number is not valid")
        }


        // //~ making validation of password
if(passwordVal===""){
    errorMessageFun(password,"password can't be blank")
    }
    else if(  passwordVal.length<6 ){
        errorMessageFun(password,"password must be more than 6 char")
       
        }
        else{
            successfulMessageFun(password)
        }

                // //~ making validation of confirm password
if(confpasswordVal===""){
    errorMessageFun(confpassword,"confirm password can't be blank")
    }
    else if(  confpasswordVal!=passwordVal ){
        errorMessageFun(confpassword,"password is not matching")
       
        }
        else{
            successfulMessageFun(confpassword)
           
        }

        successfulSubmit();
       
    } //!this bracket related to validFunction()

//* function to never remove data from local storage after referish and adding another object
let arrayUsersData;
function saveTheLastData (){
if (localStorage.Users_data!=null){
    arrayUsersData=JSON.parse(localStorage.Users_data)
}
else{
    arrayUsersData=[]
}}
saveTheLastData ()

   //* making function to show the successful message for all inputes
//~fun to store data and redirect me to home page
   function storeAndSuccess(numInput, count) {
    if (numInput === count) {
        
        let userData=
     {  "username":username.value,
       "email":email.value,
       "Phone":Phone.value,
        "password":password.value,
        "confpassword":confpassword.value}
        arrayUsersData.push(userData)
     
        localStorage.setItem('Users_data', JSON.stringify(arrayUsersData));
        localStorage.setItem('userName', username.value);
      
        alert("submited successfully");
        setTimeout(()=>{
            
            window.location.href = "index.html";

          
        }, 5000)
        clearInputs()  //to empty the inputes i dont need it after submiting
     
    }
  }
  //~fun to make sure that the entire inputes are ok after entering all data
  function successfulSubmit() {
    let allParent_input = document.getElementsByClassName("parent_input");
    let numInput = allParent_input.length - 1;
    for (let i = 0; i < allParent_input.length; i++) {
      if (allParent_input[i].className=== "parent_input is-valid") {
        let count = i;
        console.log(count);
     

        storeAndSuccess(numInput, count); 
      } else {
        return false;
      }
    }
  }




//   function to empty inputes 
function clearInputs(){
     username.value=""
     email.value=""
     Phone.value=""
     password.value=""
     confpassword.value=""
}

  