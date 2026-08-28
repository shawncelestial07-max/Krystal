/* =========================================
   KRYSTAL PORTFOLIO
========================================= */


// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

        if (mobileMenu.classList.contains("open")) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });


    const mobileLinks =
        document.querySelectorAll(".mobile-menu a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });

}


// =========================================
// NAVBAR SHADOW
// =========================================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 3px 15px rgba(0,0,0,.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// =========================================
// FOOTER YEAR
// =========================================

const footer =
    document.querySelector("footer p");

if (footer) {

    footer.textContent =
        `© ${new Date().getFullYear()} Krystal Angeli C. Talaman`;

}


// =========================================
// INTRO
// =========================================

window.addEventListener("load", () => {

    const intro =
        document.getElementById("intro");

    if (!intro) return;


    // Prevent scrolling while intro is playing

    document.body.style.overflow = "hidden";


    // Allow scrolling after intro finishes

    setTimeout(() => {

        document.body.style.overflow = "";

    }, 3200);

});