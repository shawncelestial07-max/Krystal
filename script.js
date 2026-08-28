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
   MODERN FLOATING PARTICLES
========================================= */

const particleField =
    document.getElementById("particleField");

if (particleField) {

    const types = [
        "dot",
        "dot",
        "dot",
        "glow",
        "glow",
        "gold",
        "ring",
        "ring",
        "leopard-ring"
    ];


    function createParticle() {

        const particle =
            document.createElement("div");

        const type =
            types[
                Math.floor(
                    Math.random() * types.length
                )
            ];

        particle.className =
            `modern-particle ${type}`;


        particle.style.left =
            Math.random() * 100 + "%";


        const size =
            4 + Math.random() * 18;

        particle.style.setProperty(
            "--size",
            `${size}px`
        );


        const duration =
            10 + Math.random() * 12;

        particle.style.setProperty(
            "--duration",
            `${duration}s`
        );


        particle.style.animationDelay =
            `${Math.random() * 5}s`;


        particleField.appendChild(
            particle
        );


        setTimeout(() => {
            particle.remove();
        }, 24000);

    }


    /* Start with a few particles */

    for (let i = 0; i < 15; i++) {
        createParticle();
    }


    /* Keep generating */

    setInterval(createParticle, 900);

}

