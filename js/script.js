/*
=====================================================
Travel NZ Website
script.js

Features:
1. Responsive Hamburger Menu
2. Sticky Header
3. Scroll-to-Top Button

Author: Your Name
=====================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        HAMBURGER MENU
    =========================================*/

    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    if (hamburger && navbar) {

        hamburger.addEventListener("click", () => {

            hamburger.classList.toggle("active");

            navbar.classList.toggle("active");

        });

    }

    /*=========================================
        CLOSE MOBILE MENU
    =========================================*/

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (hamburger && navbar) {

                hamburger.classList.remove("active");

                navbar.classList.remove("active");

            }

        });

    });

    /*=========================================
        STICKY HEADER
    =========================================*/

    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /*=========================================
        SCROLL TO TOP BUTTON
    =========================================*/

    const scrollButton = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {

        if (!scrollButton) return;

        if (window.scrollY > 300) {

            scrollButton.style.display = "flex";

        } else {

            scrollButton.style.display = "none";

        }

    });

    if (scrollButton) {

        scrollButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=========================================
        ACTIVE NAVIGATION LINK
    =========================================*/

    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

    /*=========================================
        SIMPLE BUTTON HOVER EFFECT
    =========================================*/

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transition = "0.3s ease";

        });

    });

});