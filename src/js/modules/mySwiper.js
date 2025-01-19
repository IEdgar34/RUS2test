import Swiper from "swiper/bundle";
export const mySwiper = () => {
    let mySwiperInit;
    function initSwiper() {
        if (window.innerWidth <= 522) {
            if (!mySwiperInit) {
                mySwiperInit = new Swiper(".my-swiper", {
                    speed: 500,
                    slidesPerView: "auto",
                    spaceBetween: 24,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + ("") + "</span>";
                        },
                    },
                });
            }
        } else {
            if (mySwiperInit) {
                mySwiperInit.destroy(true, true);
                mySwiperInit = null;
            }
        }
    }
    initSwiper();

    window.addEventListener("resize", initSwiper);
};
