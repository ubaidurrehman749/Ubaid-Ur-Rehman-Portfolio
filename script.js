/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");

}


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
