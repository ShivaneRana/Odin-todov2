import "./style.css";
import "./asset/Gilroy/stylesheet.css";

const theme = document.querySelector(".theme");

theme.addEventListener("click",() => {
    console.log("theme button was clicked");
    document.documentElement.classList.toggle("dark");
})