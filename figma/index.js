var icon = document.getElementById("button2")
icon.onclick = function () {
    document.body.classList.toggle("white-theme")


}
icon.addEventListener("click", myfunction);
function myfunction() {
    if (icon.innerHTML != "dark") {

        icon.innerHTML = "dark"
    }
    else {
        icon.innerHTML = "white"
    }

}
const image = document.querySelector(".slimg")

icon.addEventListener("click", function () {
    if (icon.innerHTML != "dark") {
        image.src = "Side image (1).png";
    }
    else {
        image.src = "Side image.png"
    }
})
const himg = document.querySelector(".headingimg")
icon.addEventListener("click", function () {
    if (icon.innerHTML != "dark") {
        himg.src = "Heading 1.png"
    }
    else {
        himg.src = "Heading 1 (1).png"
    }
})
const vec = document.querySelector(".table")
icon.addEventListener("click", function () {
    if (icon.innerHTML != "dark") {
        vec.style.backgroundImage = 'url("Vector 1 (1).png")'
    }
    else {
        vec.style.backgroundImage = 'url("Vector 1.png")'
    }
})
const desgine = document.querySelector(".desgine")
icon.addEventListener("click", function () {
    if (icon.innerHTML != "white") {
        desgine.style.backgroundImage = 'url("Background elements.png")'
    }
    else {
        desgine.style.backgroundImage = 'url("")'
    }
})
const logo = document.querySelector(".sheraw")

icon.addEventListener("click", function () {
    if (icon.innerHTML == "dark") {
        logo.src = "Shera Web.png";
    }
    else {
        logo.src = "Shera Web (1).png"
    }
})

