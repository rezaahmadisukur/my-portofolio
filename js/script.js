$("#ach").on("click", function () {
    $("#ach").addClass("__active");
    $("#pro").removeClass("__active");
    $(".project__based").html(`
            <div class="ach__image">
                <img src="./img/sertifikat-01.jpg" alt="">
            </div>
            <div class="ach__image">
                <img src="./img/sertifikat-02.jpg" alt="">
            </div>
            <div class="ach__image">
                <img src="./img/sertifikat-03.jpg" alt="">
            </div>
            <div class="ach__image">
                <img src="./img/sertifikat-04.jpg" alt="">
            </div>
            <div class="ach__image">
                <img src="./img/sertifikat-05.jpg" alt="">
            </div>
        `);
});

$("#pro").on("click", function () {
    $("#pro").addClass("__active");
    $("#ach").removeClass("__active");
    $(".project__based").html(`
        <div class="card">
                    <div class="card__head">
                        <img src="./img/not-found.jpg" alt="">
                    </div>
                    <div class="card__body">
                        <h3>Title Card Project Based</h3>
                        <a href="#" class="btn card__body__link">
                            <i class="ri-github-fill"></i>
                            Source Code
                        </a>
                    </div>
                </div>
                <div class="card">
                    <div class="card__head">
                        <img src="./img/not-found.jpg" alt="">
                    </div>
                    <div class="card__body">
                        <h3>Title Card Project Based</h3>
                        <a href="#" class="btn card__body__link">
                            <i class="ri-github-fill"></i>
                            Source Code
                        </a>
                    </div>
                </div>
                <div class="card">
                    <div class="card__head">
                        <img src="./img/not-found.jpg" alt="">
                    </div>
                    <div class="card__body">
                        <h3>Title Card Project Based</h3>
                        <a href="#" class="btn card__body__link">
                            <i class="ri-github-fill"></i>
                            Source Code
                        </a>
                    </div>
                </div>
        `);
});

const toogleMenu = document.querySelector(".toggle__menu");
const toogleClose = document.querySelector(".toggle__close");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");

toogleMenu.addEventListener("click", () => {
    navList.classList.add("show__menu");
});

toogleClose.addEventListener("click", () =>
    navList.classList.remove("show__menu")
);

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        navList.classList.remove("show__menu");
    });
});
