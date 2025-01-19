export const menuModal = () => {
    //открыие сайдбара
    const menuOpen = document.querySelector(".menu__open");
    const menuClose = document.querySelector(".menu__close");
    const menu = document.querySelector(".sidebar__wrapper");
    const sidebar = document.querySelector(".sidebar");

    menuOpen.addEventListener("click", (e) => {
        sidebar.classList.add("sidebar_active");
        menu.classList.add("sidebar__wrapper_active");
    });
    menuClose.addEventListener("click", (e) => {
        console.log("asas");
        menu.classList.remove("sidebar__wrapper_active");
        sidebar.classList.remove("sidebar_active");
    });

    //
    const wrap = document.querySelector(".main__review-text-wrapper");
    const showBtn = document.getElementById("show").addEventListener("click", (e) => {
        e.preventDefault();
        wrap.classList.toggle("main__review-text-wrapper_active");
    });

    const mainWrap = document.querySelector(".main__brands__list-wrapper");
    const showbrands = document.getElementById("showbrands").addEventListener("click", (e) => {
        e.preventDefault();
        mainWrap.classList.toggle("main__brands__list-wrapper_active");
    });
};
