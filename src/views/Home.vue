<template>
  <div>
    <Heros />
    <h3
      class="flex justify-center items-center mx-auto text-black uppercase text-3xl font-extrabold"
    >
      courses
    </h3>
    <Courses />
  </div>
</template>

<script>
import Heros from "@/components/Heros.vue";
import Courses from "@/components/Courses.vue";
export default {
  name: "Home",
  components: { Heros, Courses },
};
</script>

<style></style>
