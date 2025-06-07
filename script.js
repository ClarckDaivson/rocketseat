const toggleMode = () => {
    const html = document.documentElement;
    const img = document.querySelector("#profile img");

    const isLight = html.classList.toggle("light");
    img.src = isLight ? "assets/img/avatar-light.png" : "assets/img/avatar.png";

    localStorage.setItem("theme", isLight ? "light" : "dark");
};

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const html = document.documentElement;
    const img = document.querySelector("#profile img");

    if (savedTheme === "light") {
        html.classList.add("light");
        img.src = "assets/img/avatar-light.png";
    }
});
