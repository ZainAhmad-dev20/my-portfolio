/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".menu-close");
const mobileLinks = document.querySelectorAll(".mobile-menu nav a");


function openMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.add("open");

    mobileMenu.setAttribute(
        "aria-hidden",
        "false"
    );

    if (menuToggle) {

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }

    document.body.style.overflow = "hidden";
}


function closeMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.remove("open");

    mobileMenu.setAttribute(
        "aria-hidden",
        "true"
    );

    if (menuToggle) {

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    document.body.style.overflow = "";
}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        openMobileMenu
    );

}


if (menuClose) {

    menuClose.addEventListener(
        "click",
        closeMobileMenu
    );

}


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const desktopLinks =
    document.querySelectorAll(
        ".desktop-nav .nav-link"
    );


function updateActiveNavigation() {

    let currentSection = "home";

    const scrollPosition =
        window.scrollY + 250;


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    desktopLinks.forEach((link) => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");


        if (
            target ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    updateActiveNavigation
);


updateActiveNavigation();


/* =========================================================
   CLOSE MOBILE MENU ON RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 1000 &&
            mobileMenu &&
            mobileMenu.classList.contains("open")
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   PROJECT GITHUB LINKS
========================================================= */

const projectLinks =
    document.querySelectorAll(
        ".project-github"
    );


projectLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            link.style.opacity = "0.65";

        }
    );

});


/* =========================================================
   SMOOTH INTERNAL NAVIGATION
========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {

                return;

            }


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});