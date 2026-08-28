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

/* =========================================
   MODERN PARTICLE SYSTEM
========================================= */

const particleField =
    document.getElementById("particleField");

if (particleField) {

    const particleTypes = [
        "dot",
        "dot",
        "dot",
        "gold",
        "gold",
        "ring",
        "ring",
        "glow",
        "leopard-ring"
    ];


    function createParticle() {

        const particle =
            document.createElement("div");


        const type =
            particleTypes[
                Math.floor(
                    Math.random() *
                    particleTypes.length
                )
            ];


        particle.className =
            "modern-particle " + type;


        /* Random horizontal position */

        particle.style.left =
            Math.random() * 100 + "%";


        /* Random size */

        const size =
            5 + Math.random() * 16;

        particle.style.setProperty(
            "--size",
            size + "px"
        );


        /* Random sideways movement */

        const drift =
            -80 + Math.random() * 160;

        particle.style.setProperty(
            "--drift",
            drift + "px"
        );


        /* Random animation speed */

        const duration =
            7 + Math.random() * 8;

        particle.style.setProperty(
            "--duration",
            duration + "s"
        );


        particleField.appendChild(
            particle
        );


        /* Remove when finished */

        setTimeout(() => {

            particle.remove();

        }, (duration + 1) * 1000);

    }


    /* Create particles immediately */

    for (let i = 0; i < 30; i++) {

        createParticle();

    }


    /* Continue creating particles */

    setInterval(() => {

        createParticle();

    }, 400);

}


