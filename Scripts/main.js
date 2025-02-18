console.log("HTML FORMS")

let details = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
}




const submitButton = document.getElementById("submitButton")

const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phoneNumber")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const alertSpan = document.getElementById("alert-password")


firstName.addEventListener("change", (e) =>{
    const name = e.target.value
    details.firstName = name
})


lastName.addEventListener("change", (e) =>{
    const lastName = e.target.value
    details.lastName = lastName
})


email.addEventListener("change", (e) =>{
    const email = e.target.value
    details.email = email
})


phoneNumber.addEventListener("change", (e) =>{
    const phoneNumber = e.target.value
    details.phoneNumber = phoneNumber

    //checks if phone number is valid or not
    const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
    console.log("Invalid phone number");
}
    //checks if the number is a valid kenyan number or not
    const kenyanPhoneRegex = /^(?:\+254|254|0)[17]\d{8}$/;
    if (kenyanPhoneRegex.test(phoneNumber)) {
        console.log("Valid Kenyan Number"); 
     } else {
        console.log("Invalid Kenyan phone number");}
        
    


})


password.addEventListener("change", (e) =>{
    const password = e.target.value
    details.password = password
})

confirmPassword.addEventListener("change", (e) =>{
    const confirmPassword = e.target.value
    details.confirmPassword = confirmPassword
})
function validatePassword(password,confirmPassword){
    if (password===confirmPassword && password.length >= 4 && password!== "" && password.length != 0 && password.trim().length!==0 && /\d/.test(password) && /[a-zA-Z]/.test(password)){
        return true;
    } else {
        return false;
    }
}
function validateNames(firstName, lastName){
    if (firstName.length <= 4 || lastName.length <= 4 || !/^[A-Za-z]+$/.test(firstName|| !/^[A-Za-z]+$/ .test(lastName) || firstName.length <=2 ||lastName.length<= 2)){
        return false
    } else {
        return true
    }

}
function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);

}

function validatePhoneNumber(phoneNumber){
    const phoneRegex = /^(?:\+254|0)7\d{8}$/;
    return phoneRegex.test(phoneNumber);

}


submitButton.addEventListener("click", (e) =>{
    console.log(details)
    const { firstName, lastName, email, password, phoneNumber, confirmPassword, acceptTerms} = details
    console.log(firstName, lastName, email, password, confirmPassword, acceptTerms)
    const isNamesValidated = validateNames (firstName, lastName)
    const isPhoneNumberValidated = validatePhoneNumber (phoneNumber)
    const isEmailValidated = validateEmail (email)


   const isPasswordValidated = validatePassword(password, confirmPassword)

   if (isPasswordValidated && isNamesValidated && isPhoneNumberValidated && isEmailValidated){
        window.location.href = "./dashboard.html"
        console.log(details)

   } else {
    alertSpan.classList.remove("alert-off-message")
    alertSpan.classList.add("alert-on-message")
   }
   setTimeout(() => {
    alertSpan.classList.remove("alert-on-message");
    alertSpan.classList.add("alert-off-message");
}, 5000);
})

// DOM api
// rest api
// 

