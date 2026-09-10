document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // MOBILE MENU
    // ================================

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");

            // Change icon
            if (navLinks.classList.contains("show")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }
        });


        // Close menu after clicking a link
        const links = navLinks.querySelectorAll("a");

        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
                menuToggle.innerHTML = "☰";
            });
        });
    }


    // ================================
    // AUTOMATIC ACTIVE PAGE
    // ================================

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    // ================================
    // SMOOTH SCROLLING
    // ================================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function(event) {

                const targetID =
                    this.getAttribute("href");

                if (targetID === "#") return;

                const target =
                    document.querySelector(targetID);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }

            });

        });

});
