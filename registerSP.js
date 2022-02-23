function userSignUp(){
    let user = document.getElementById("userRegBtn");
    let change = location.replace("loginPage.html");
    user.appendChild(change)
}

//toggle password
const togglePassword_1 = document.querySelector('#togglePassword_1');
const password = document.querySelector('#password');
togglePassword_1.addEventListener('click', function () {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye');
  });
  //toggle password
const togglePassword_2 = document.querySelector('#togglePassword_2');
const password1 = document.querySelector('#confirm_password');
togglePassword_2.addEventListener('click', function () {
  // toggle the type attribute
  const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
  password1.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye');
});
//

   
 