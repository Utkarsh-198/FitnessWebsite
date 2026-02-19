function setCalories(){
    const select = document.getElementById("foodSelect");
    const selectedOption = select.options[select.selectedIndex];
    const cal = selectedOption.getAttribute("data-cal");
    document.getElementById("calories").value = cal || "";
}

document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector("form");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const food = document.getElementById("foodSelect").value;
        const cal = document.getElementById("calories").value;

        if(!food){
            alert("Please select a food item");
            return;
        }

        alert("Food added: " + cal + " kcal");
        form.reset();
    });

});

//navigation
const list = document.querySelectorAll('.navigation ul li');

list.forEach((item)=>{
    item.addEventListener('click', function(){
        list.forEach((li)=> li.classList.remove('active'));
        this.classList.add('active');
    });
});
