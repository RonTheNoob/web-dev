document.addEventListener("DOMContentLoaded", () => {    
    const header = document.querySelector("div.top");
    const navi = document.querySelector("nav");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer")

    const lightButton = document.querySelector("input.light");
    const darkButton = document.querySelector("input.dark");

    darkButton.addEventListener("change", () => {
        document.body.classList.add("dark-mode")
    });

    lightButton.addEventListener("change", () => {
        document.body.classList.remove("dark-mode")
    });
});