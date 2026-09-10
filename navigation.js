document.addEventListener("DOMContentLoaded", function () {

    /* ======================================
       PRIMARY NAVIGATION LINKS
    ====================================== */

    const navigationItems = [
        {
            name: "Home",
            link: "index.html"
        },

        {
            name: "About Me",
            link: "about.html"
        },

        {
            name: "Experience",
            link: "experience.html"
        },

        {
            name: "Projects",
            link: "projects.html"
        },

        {
            name: "Contact",
            link: "contact.html"
        }
    ];


    /* ======================================
       FIND NAVIGATION CONTAINER
    ====================================== */

    const navContainer =
        document.getElementById("primary-navigation");


    if (navContainer) {

        const navList =
            document.createElement("ul");


        navigationItems.forEach(function (item) {

            const listItem =
                document.createElement("li");

            const link =
                document.createElement("a");


            link.textContent =
                item.name;

            link.href =
                item.link;


            listItem.appendChild(link);

            navList.appendChild(listItem);

        });


        navContainer.appendChild(navList);

    }


    /* ======================================
       AUTOMATICALLY SHOW ACTIVE PAGE
    ====================================== */

    let currentPage =
        window.location.pathname
        .split("/")
        .pop();


    if (currentPage === "") {
        currentPage = "index.html";
    }


    const navigationLinks =
        document.querySelectorAll(
            "#primary-navigation a"
        );


    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });


    /* ======================================
       MOBILE MENU
    ====================================== */

    const menuButton =
        document.getElementById("menu-toggle");


    const primaryNav =
        document.getElementById(
            "primary-navigation"
        );


    if (menuButton && primaryNav) {

        menuButton.addEventListener(
            "click",
            function () {

                primaryNav.classList.toggle(
                    "show"
                );


                if (
                    primaryNav.classList.contains(
                        "show"
                    )
                ) {

                    menuButton.textContent = "✕";

                }

                else {

                    menuButton.textContent = "☰";

                }

            }
        );

    }

});
