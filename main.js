// Back to the top button
const backToTopBtn = document.getElementById("back-to-top-btn");

backToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (nav.classList.contains("active")) {
        nav.classList.toggle("active");
        toggleNavButton.classList.toggle("active");
    }
});

// Hamburger menu
const toggleNavButton = document.querySelector(".toggle-nav");
const nav = document.querySelector(".nav-ham");

toggleNavButton.addEventListener("click", function () {
    nav.classList.toggle("active");
    toggleNavButton.classList.toggle("active");
});

// Make info section follow the user
const info = document.querySelector(".info");
const blank = document.querySelector(".blank");
const footer = document.querySelector("footer");

const headerHeight = document.querySelector("header").offsetHeight;
const footerHeight = footer.offsetHeight;
const hamHeight = nav.offsetHeight;

window.addEventListener("scroll", function () {
    if (
        window.pageYOffset >= headerHeight &&
        window.pageYOffset >= headerHeight + hamHeight
    ) {
        info.classList.add("fixed"); // add the fixed class
        blank.classList.add("blank-active");
    } else {
        info.classList.remove("fixed"); // remove the fixed class
        blank.classList.remove("blank-active");
    }
});

// Display full image when clicked
const modal = document.querySelector(".modal");
const images = document.querySelectorAll(".photo");
const modalImage = document.querySelector(".modal-content");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = image.src;
    });
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
