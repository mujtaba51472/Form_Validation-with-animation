var labels=document.querySelectorAll('label')
labels.forEach(label => {
label.innerHTML=label.innerText.split('')
.map((letter,indx)=>`<span style="transition-delay:${indx * 50}ms">${letter}</span>`)
       .join('');
})  
// form validation 
const userName=document.querySelector('#username');
const userEmail=document.querySelector('#useremail');
const userPassword=document.querySelector('#userpassword');
const confirmPassword=document.querySelector('#Cpassword');
var form=document.querySelector('form');

form.addEventListener('submit' ,(e)=>{
       e.preventDefault()
       checker();
})

function checker(){
       var usernameValue = userName.value.trim();
       var emailValue = userEmail.value.trim();
       var passwordValue = userPassword.value.trim();
       var password2Value = confirmPassword.value.trim();

       if(usernameValue== '' ){
              showError(userName, 'name cannot be blank');

       }
       else{
              showSuccess(userName, "valid")
       }
       if(emailValue==''){
              showError(userEmail,'email required')
       }
       else if(!isEmail(emailValue)){
              showError(input, 'not valid email')
       }
       else {
              showSuccess(userEmail,'valid')
       }
       if(passwordValue===''){
              showError(userPassword, 'password cannot be blank');
       }
       else if(passwordValue.length < 8){
             showError(userPassword,'passowrd should be greater than 8 characters');
       }
       else {
              showSuccess(userPassword,'valid')
       }
       if(password2Value==''){
              showError(confirmPassword, 'confirm password cannot be blank')
       }
       else if(password2Value!==passwordValue){
              showError(confirmPassword,'not matched')
       }
       else{
              showSuccess(confirmPassword,'matched')
       }
}
 function showError(input, message){
        const formControl=input.parentElement;
        formControl.classList.add('error');
        const small=formControl.querySelector('small');
        small.innerText=message;

}
function showSuccess(input,message){
       const formControl=input.parentElement;
       const small =formControl.querySelector('small');
       formControl.classList.add('success');

       small.innerText=message;

}

function isEmail(email) {
       return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}










