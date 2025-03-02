document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated-text");
    
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("glow");
        }, index * 500);
    });

    const colors = ["#ff3d00", "#0ff", "#f39c12", "#8e44ad"];
    let i = 0;
    setInterval(() => {
        document.querySelector(".dynamic-text").style.color = colors[i];
        i = (i + 1) % colors.length;
    }, 1000);
});
