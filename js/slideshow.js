/*
=====================================================
Travel NZ Website
slideshow.js

Controls:
1. Home Hero Slideshow
2. Tours Featured Slideshow
3. About Team Slideshow

Author: Your Name
=====================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        HOME PAGE HERO SLIDER
    =========================================*/

    const homeSlides = document.querySelectorAll(".slide");
    const homeDots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let homeIndex = 0;

    if (homeSlides.length > 0) {

        function showHomeSlide(index) {

            if (index >= homeSlides.length) {
                homeIndex = 0;
            }

            if (index < 0) {
                homeIndex = homeSlides.length - 1;
            }

            homeSlides.forEach(slide =>
                slide.classList.remove("active-slide")
            );

            homeDots.forEach(dot =>
                dot.classList.remove("active-dot")
            );

            homeSlides[homeIndex].classList.add("active-slide");

            if (homeDots.length > 0) {
                homeDots[homeIndex].classList.add("active-dot");
            }

        }

        function nextHomeSlide() {
            homeIndex++;
            if (homeIndex >= homeSlides.length) {
                homeIndex = 0;
            }
            showHomeSlide(homeIndex);
        }

        function prevHomeSlide() {
            homeIndex--;
            if (homeIndex < 0) {
                homeIndex = homeSlides.length - 1;
            }
            showHomeSlide(homeIndex);
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", nextHomeSlide);
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", prevHomeSlide);
        }

        homeDots.forEach((dot, index) => {

            dot.addEventListener("click", () => {

                homeIndex = index;

                showHomeSlide(homeIndex);

            });

        });

        setInterval(nextHomeSlide, 5000);

    }

    /*=========================================
        TOURS PAGE SLIDER
    =========================================*/

    const tourSlides = document.querySelectorAll(".tour-slide");

    let tourIndex = 0;

    if (tourSlides.length > 0) {

        function showTourSlide(index) {

            tourSlides.forEach(slide => {

                slide.classList.remove("active-slide");

            });

            if (index >= tourSlides.length) {
                tourIndex = 0;
            }

            tourSlides[tourIndex].classList.add("active-slide");

        }

        function nextTourSlide() {

            tourIndex++;

            if (tourIndex >= tourSlides.length) {

                tourIndex = 0;

            }

            showTourSlide(tourIndex);

        }

        setInterval(nextTourSlide, 4500);

    }

    /*=========================================
        ABOUT PAGE TEAM SLIDER
    =========================================*/

    const teamSlides = document.querySelectorAll(".team-slide");
    const teamDots = document.querySelectorAll(".team-dot");

    let teamIndex = 0;

    if (teamSlides.length > 0) {

        function showTeamSlide(index) {

            if (index >= teamSlides.length) {

                teamIndex = 0;

            }

            if (index < 0) {

                teamIndex = teamSlides.length - 1;

            }

            teamSlides.forEach(slide => {

                slide.classList.remove("active-slide");

            });

            teamDots.forEach(dot => {

                dot.classList.remove("active-dot");

            });

            teamSlides[teamIndex].classList.add("active-slide");

            if (teamDots.length > 0) {

                teamDots[teamIndex].classList.add("active-dot");

            }

        }

        function nextTeamSlide() {

            teamIndex++;

            if (teamIndex >= teamSlides.length) {

                teamIndex = 0;

            }

            showTeamSlide(teamIndex);

        }

        teamDots.forEach((dot, index) => {

            dot.addEventListener("click", () => {

                teamIndex = index;

                showTeamSlide(teamIndex);

            });

        });

        setInterval(nextTeamSlide, 5000);

    }

});