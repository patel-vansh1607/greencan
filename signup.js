console.log("User Details = ")

let details = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const fullName = document.getElementById("fullName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const signinButton = document.getElementById("signinButton")

fullName.addEventListener("change", (e) =>{
    const name = e.target.value
    details.fullName = name
})

email.addEventListener("change", (e) =>{
    const name = e.target.value
    details.email = name
})

password.addEventListener("change", (e) =>{
    const name = e.target.value
    details.password = name
})

confirmPassword.addEventListener("change", (e) => {
    const name = e.target.value
    details.confirmPassword = name
})

function validatePassword(password,confirmPassword){
    if (password===confirmPassword && password.length >= 4 && password!== "" && password.length != 0 && password.trim().length!==0 && /\d/.test(password) && /[a-zA-Z]/.test(password)){
        return true;
    } else {
        return false;
    }
}
function validateNames(fullName){
    if (fullName.length <= 4 || !/^[A-Za-z]+$/.test(fullName|| fullName.length <=2 )){
        return false
    } else {
        return true
    }

}
function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);

}


signinButton.addEventListener("click", (e) =>{
    console.log(details)
    const { fullName, email, password,  confirmPassword } = details
    console.log(fullName, email, password, confirmPassword)
    const isNamesValidated = validateNames (fullName)
    const isEmailValidated = validateEmail (email)
    const isPasswordValidated = validatePassword(password, confirmPassword)

   if (isPasswordValidated && isNamesValidated && isPhoneNumberValidated && isEmailValidated){
        window.location.href = "./main.html"
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