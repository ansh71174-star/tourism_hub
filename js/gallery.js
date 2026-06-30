/*
=====================================================
Travel NZ Website
gallery.js

Extra JavaScript Feature
Image Lightbox Gallery

Author: Your Name
=====================================================
*/

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // Select Gallery Images
    // ==========================================

    const galleryImages = document.querySelectorAll(".gallery img");

    // Exit if no gallery exists on current page

    if (galleryImages.length === 0) {
        return;
    }

    // ==========================================
    // Create Lightbox
    // ==========================================

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    const lightboxImage = document.createElement("img");

    const closeButton = document.createElement("span");

    closeButton.innerHTML = "&times;";
    closeButton.className = "lightbox-close";

    lightbox.appendChild(closeButton);
    lightbox.appendChild(lightboxImage);

    document.body.appendChild(lightbox);

    // ==========================================
    // Open Lightbox
    // ==========================================

    galleryImages.forEach(image => {

        image.addEventListener("click", function () {

            lightbox.classList.add("show");

            lightboxImage.src = this.src;

            lightboxImage.alt = this.alt;

            document.body.style.overflow = "hidden";

        });

    });

    // ==========================================
    // Close Button
    // ==========================================

    closeButton.addEventListener("click", function () {

        closeLightbox();

    });

    // ==========================================
    // Click Outside Image
    // ==========================================

    lightbox.addEventListener("click", function (e) {

        if (e.target === lightbox) {

            closeLightbox();

        }

    });

    // ==========================================
    // ESC Key
    // ==========================================

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            closeLightbox();

        }

    });

    // ==========================================
    // Close Function
    // ==========================================

    function closeLightbox() {

        lightbox.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});