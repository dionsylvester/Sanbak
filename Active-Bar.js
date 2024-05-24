button = document.querySelector(".ham-button");
button.onclick = function(){
    header = document.querySelector(".navigation-bar");
    header.classList.toggle("active");
}