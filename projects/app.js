// select dom elements

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

const searchForm = document.getElementById("searchForm");
const jobSearch = document.getElementById("jobSearch");
const locationInput = document.getElementById("location");
const jobType = document.getElementById("jobType");

const favoriteButtons = document.querySelectorAll(".favorite-btn");


// Dark Light Mode


function initializeTheme() {

    const savedTheme =
        localStorage.getItem("jobfinder-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }

    } else {

        document.body.classList.remove("dark-mode");

        if (themeBtn) {
            themeBtn.textContent = "🌙";
        }
    }
}

function toggleTheme(){
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {

        localStorage.setItem(
            "jobfinder-theme",
            "dark"
        );

        themeBtn.textContent = "☀️";

    }
}


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        toggleTheme
    );

}
initializeTheme();
