<template>
  <div>
    <Heros />
    <h3
      class="flex justify-center items-center mx-auto text-black uppercase text-3xl font-extrabold"
    >
      courses
    </h3>
    <Courses />
    <Swiper />
    <Footer />
  </div>
</template>

<script>
import Heros from "@/components/Heros.vue";
import Courses from "@/components/Courses.vue";
import Swiper from "@/components/swiper.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: { Heros, Courses, Swiper, Footer },
};
</script>

<style></style>
