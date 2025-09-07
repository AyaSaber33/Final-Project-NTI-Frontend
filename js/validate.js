let userName = document.getElementById("userName")
let email = document.getElementById("email")
let subject = document.getElementById("subject")
let message = document.getElementById("message")

let userError = document.getElementById("nameError")
let emailError = document.getElementById("emailError")
let subjectError = document.getElementById("subjectError")
let messageError = document.getElementById("messageError")
let formError = document.getElementById("formError")

let isValidName = false;
let isValidEmail = false;
let isValidAddress = false;
let isValidMessage = false;

userName.addEventListener('input', ()=>{
    if(userName.value.trim().length<3){
        userError.textContent = "User Name has to be more than 3 characters";
        userError.style.color = "red";
        isValidName = false;
    }else{
        userError.textContent = "the name is valid";
        userError.style.color = "green";
        isValidName = true;
    }
}
)
email.addEventListener('input', ()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.value)){
        emailError.textContent = "please enter valid email";
        emailError.style.color = "red";
        isValidEmail = false;
    }else{
        emailError.textContent = "the email is valid";
        emailError.style.color = "green";
        isValidEmail = true;
    }
}
)
subject.addEventListener('input',()=>{
    if(subject.value.trim().length<7){
        subjectError.textContent = "Address has to be more than 7 characters";
        subjectError.style.color = "red";
        isValidAddress = false;
    }else{
        subjectError.textContent = "the address is valid";
        subjectError.style.color = "green";
        isValidAddress = true;
    }
})
message.addEventListener('input', ()=>{
    if(message.value.trim().length<1){
        messageError.textContent = "please tell us your message";
        messageError.style.color = "red";
        isValidMessage = false;
    }else{
        messageError.textContent = " ";
        isValidMessage = true;
    }
})

document.getElementById("formHandler").addEventListener('submit',(e)=>{
    if(!userName.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()){
        formError.textContent="please fill all required fields";
        formError.style.color = "red";
        e.preventDefault();
    }else if(!isValidName|| !isValidEmail || !isValidAddress || !isValidMessage){
        formError.textContent="please match the format for each input";
        formError.style.color = "red";
        e.preventDefault();
    }else{
        formError.textContent="form submitted, thanks for filling the form";
        formError.style.color = "green";
    }
})



