document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => observer.observe(el));

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    document.querySelector(".cta").addEventListener("click", () => {
        window.scrollTo({ top: document.querySelector(".info").offsetTop, behavior: "smooth" });
    });
});


const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleBtn.innerHTML = `<i class="fa-solid fa-moon" style="color: #ffffff;"></i>`; 
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleBtn.innerHTML = `<i class="fa-solid fa-moon" style="color: #ffffff;"></i>`; 
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggleBtn.innerHTML = "🌞"; 
    }
});