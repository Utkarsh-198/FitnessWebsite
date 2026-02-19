const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');

signUpBtn.addEventListener('click',()=>container.classList.add("right-panel-active"));
signInBtn.addEventListener('click',()=>container.classList.remove("right-panel-active"));


document.getElementById("loginForm").addEventListener("submit",function(e){
e.preventDefault();

const user=document.getElementById("username").value;
const pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){
sessionStorage.setItem("loggedIn","true");
window.location.href="main.html";  
}else{
alert("Invalid login");
}
});