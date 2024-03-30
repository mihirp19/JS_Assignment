//form-validation
var errName = document.getElementById("name");
var errPass = document.getElementById("password");
var errCPass = document.getElementById("confirmPassword");
var errMsg = document.getElementById("errorMessage");

function validateForm(){
    if(errName === "" || errPass === "" || errCPass === ""){
        errorMessage.innerHTML = "Enter the required fields";
    }
    if(errPass != errCPass){
        errorMessage.innerHTML = "The passwords do not match!";
    }
}