import "../sass/style.scss";
import { swiperInit } from "./modules/swiper";
import { mySwiper } from "./modules/mySwiper";
import { menuModal } from "./modules/menumodal";

window.addEventListener("DOMContentLoaded", () => {
    swiperInit();
    mySwiper();
    menuModal()

    
});
