const menubar = document.getElementById("menubar");
const closebtn = document.getElementById("closebtn");
const overlay = document.getElementById("overlay");


menubar.addEventListener('click', () => {
    document.body.classList.add("menu-open");
    overlay.classList.add("active");
});

const closeMenu = () => {
    document.body.classList.remove("menu-open");
    overlay.classList.remove("active");
};

closebtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
 



