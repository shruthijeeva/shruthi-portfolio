// Dark Mode Toggle
document.getElementById("theme-switch")
.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

// Scroll Reveal
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// Animated Chart
const canvas = document.getElementById("chartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 350;
canvas.height = 300;

let bars = [100, 180, 140, 220, 170];
let progress = 0;

function drawChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bars.forEach((value, index) => {
        ctx.fillStyle = "#2563eb";
        ctx.fillRect(
            40 + index * 60,
            canvas.height - progress * value / 220,
            40,
            progress * value / 220
        );
    });

    if (progress < 1) {
        progress += 0.02;
        requestAnimationFrame(drawChart);
    }
}

drawChart();