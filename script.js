function showPopup(show) {

```
const popup =
    document.getElementById("popup");


if (show) {

    popup.style.display =
        "flex";

} else {

    popup.style.display =
        "none";

}
```

}

document.addEventListener(
"DOMContentLoaded",
function () {

```
    /* =========================
       RECOMMENDATION FORM
    ========================= */

    const form =
        document.getElementById(
            "recommendation_form"
        );


    const recommendationsContainer =
        document.getElementById(
            "all_recommendations"
        );


    const nameInput =
        document.getElementById(
            "new_name"
        );


    const emailInput =
        document.getElementById(
            "new_email"
        );


    const recommendationInput =
        document.getElementById(
            "new_recommendation"
        );


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                nameInput.value.trim();


            const email =
                emailInput.value.trim();


            const recommendation =
                recommendationInput
                    .value
                    .trim();


            if (
                name !== "" &&
                email !== "" &&
                recommendation !== ""
            ) {


                const newRecommendation =
                    document.createElement(
                        "article"
                    );


                newRecommendation
                    .classList
                    .add(
                        "recommendation-card"
                    );


                const quote =
                    document.createElement(
                        "div"
                    );


                quote.classList.add(
                    "quote"
                );


                quote.textContent =
                    "“";


                const recommendationText =
                    document.createElement(
                        "p"
                    );


                recommendationText
                    .classList
                    .add(
                        "rec-text"
                    );


                recommendationText
                    .textContent =
                    recommendation;


                const recommendationAuthor =
                    document.createElement(
                        "strong"
                    );


                recommendationAuthor
                    .classList
                    .add(
                        "recommendation-author"
                    );


                recommendationAuthor
                    .textContent =
                    `— ${name}`;


                newRecommendation
                    .appendChild(
                        quote
                    );


                newRecommendation
                    .appendChild(
                        recommendationText
                    );


                newRecommendation
                    .appendChild(
                        recommendationAuthor
                    );


                recommendationsContainer
                    .appendChild(
                        newRecommendation
                    );


                form.reset();


                showPopup(true);

            }

        }
    );


    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const menuButton =
        document.getElementById(
            "menuButton"
        );


    const navLinks =
        document.getElementById(
            "navLinks"
        );


    menuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );

        }
    );


    const navigationLinks =
        navLinks.querySelectorAll(
            "a"
        );


    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks
                        .classList
                        .remove(
                            "active"
                        );

                }
            );

        }
    );


    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElement =
        document.getElementById(
            "currentYear"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

}
```

);
