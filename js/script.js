// for menu togle

const menu_toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

const menu_x = document.querySelector(".menu-x");

menu_toggle.addEventListener("click", () => {
    menu_toggle.classList.toggle("is-active");
    sidebar.classList.toggle("is-active");
    // menu_x.classList.toggle("is-active");
});

// for drop down calendar

var select = document.querySelector(".select");
var span = document.querySelector(".select span");
var selectImg = document.querySelector(".select img");
var ul = document.querySelector(".select ul");
var li = document.querySelectorAll(".select ul li");

select.setAttribute("value", li[0].innerText);

for (var i = 0; i < li.length; i++) {
    li[i].setAttribute("onClick", "changeValue(this)");
}

selectImg.onclick = () => span.click();
span.onclick = () => {
    if (ul.style.display === "none") {
        ul.style.display = "block";
        selectImg.classList.add("rotate");
    } else {
        ul.style.display = "none";
        selectImg.classList.remove("rotate");
    }
};

function changeValue(e) {
    span.innerText = e.innerText;
    select.setAttribute("value", e.innerText);
    ul.style.display = "none";
    selectImg.classList.remove("rotate");
}
