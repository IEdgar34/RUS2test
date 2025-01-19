import Swiper from "swiper/bundle";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export const swiperInit = () => {
    let swiperInstance;

    function initSwiper() {
        if (window.innerWidth <= 900) {
            if (!swiperInstance) {
                swiperInstance = new Swiper(".swipe", {
                    speed: 500,
                    slidesPerView: "auto",

                    /* navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }, */
                });
            }
        } else {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        }
    }

    initSwiper();
    window.addEventListener("resize", initSwiper);
};
