let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10); // 10 روز آینده

function updateCountdown() {
    let now = new Date();
    let diff = targetDate - now;

    if (diff < 0) diff = 0;

    document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
    document.getElementById("hours").innerText = Math.floor(diff / (1000*60*60) % 24);
    document.getElementById("minutes").innerText = Math.floor(diff / (1000*60) % 60);
    document.getElementById("seconds").innerText = Math.floor(diff / 1000 % 60);
}
setInterval(updateCountdown, 1000);



// heeeder hast

    const header = document.getElementById("header");
    const toggle = document.getElementById("toggle");
    const menu = document.querySelector(".menu");

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
// heeder tamam

