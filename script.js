// login 
if(sessionStorage.getItem("loggedIn") !== "true"){
    window.location.href = "login.html";
}



//navigation
const list = document.querySelectorAll('.navigation ul li');

list.forEach((item)=>{
    item.addEventListener('click', function(){
        list.forEach((li)=> li.classList.remove('active'));
        this.classList.add('active');
    });
});
