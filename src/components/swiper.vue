<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="30"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      class="m-2 h-auto max-w-md rounded-md border-slate-800 border-2 text-black"
      ><div class="flex flex-col items-center justify-center gap-y-2 p-2">
        <img src="../assets/images/user1.png" alt="" class="rounded-full h-11 w-11" />
        <p class="p-1 mx-auto text-black font-mono font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum
          sapiente laborum sunt dolor voluptates et voluptas dignissimos, est numquam hic
          fugit error tempore magni at labore corporis ab veritatis!
        </p>
        <strong class="flex justify-start items-start p-1">~ John Doe</strong>
      </div></swiper-slide
    >
    <swiper-slide
      class="m-2 h-auto max-w-md rounded-md border-slate-800 border-2 text-black"
      ><div class="flex flex-col items-center justify-center gap-y-2 p-2">
        <img src="../assets/images/user2.png" alt="" class="rounded-full h-11 w-11" />
        <p class="p-1 mx-auto text-black font-mono font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum
          sapiente laborum sunt dolor voluptates et voluptas dignissimos, est numquam hic
          fugit error tempore magni at labore corporis ab veritatis!
        </p>
        <strong class="flex justify-start items-start p-1">~ John Doe</strong>
      </div></swiper-slide
    >
    <swiper-slide
      class="m-2 h-auto max-w-md rounded-md border-slate-800 border-2 text-black"
      ><div class="flex flex-col items-center justify-center gap-y-2 p-2">
        <img src="../assets/images/user3.png" alt="" class="rounded-full h-11 w-11" />
        <p class="p-1 mx-auto text-black font-mono font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum
          sapiente laborum sunt dolor voluptates et voluptas dignissimos, est numquam hic
          fugit error tempore magni at labore corporis ab veritatis!
        </p>
        <strong class="flex justify-start items-start p-1">~ John Doe</strong>
      </div></swiper-slide
    >
    <swiper-slide
      class="m-2 h-auto max-w-md rounded-md border-slate-800 border-2 text-black"
      ><div class="flex flex-col items-center justify-center gap-y-2 p-2">
        <img src="../assets/images/user4.png" alt="" class="rounded-full h-11 w-11" />
        <p class="p-1 mx-auto text-black font-mono font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum
          sapiente laborum sunt dolor voluptates et voluptas dignissimos, est numquam hic
          fugit error tempore magni at labore corporis ab veritatis!
        </p>
        <strong class="flex justify-start items-start p-1">~ John Doe</strong>
      </div></swiper-slide
    >
    <swiper-slide
      class="m-2 h-auto max-w-md rounded-md border-slate-800 border-2 text-black"
      ><div class="flex flex-col items-center justify-center gap-y-2 p-2">
        <img src="../assets/images/user5.png" alt="" class="rounded-full h-11 w-11" />
        <p class="p-1 mx-auto text-black font-mono font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum
          sapiente laborum sunt dolor voluptates et voluptas dignissimos, est numquam hic
          fugit error tempore magni at labore corporis ab veritatis!
        </p>
        <strong class="flex justify-start items-start p-1">~ John Doe</strong>
      </div></swiper-slide
    >
    <swiper-slide
      class="m-2 h-auto max-w-md rounded-md border-slate-800 border-2 text-black"
      ><div class="flex flex-col items-center justify-center gap-y-2 p-2">
        <img src="../assets/images/user.jpg" alt="" class="rounded-full h-11 w-11" />
        <p class="p-1 mx-auto text-black font-mono font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum
          sapiente laborum sunt dolor voluptates et voluptas dignissimos, est numquam hic
          fugit error tempore magni at labore corporis ab veritatis!
        </p>
        <strong class="flex justify-start items-start p-1">~ John Doe</strong>
      </div></swiper-slide
    >
    ...
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
