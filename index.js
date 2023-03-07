AOS.init({
    duration: 1000,
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link")


navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});

const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll",showBtn);
scrollBtn.addEventListener("click",scrollToTop);

function showBtn() {
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
    if (rootEl.scrollTop / scrollTotal > 0.3) {
        scrollBtn.classList.add("show-btn");
    } else {
        scrollBtn.classList.remove("show-btn");
    }

}

function scrollToTop() {
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}