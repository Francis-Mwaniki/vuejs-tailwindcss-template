<template>
  <main
    class="grid grid-flow-row lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1"
  >
    <div
      class="flex flex-col p-2 bg-gray-300 shadow-lg shadow-black rounded-md flex-wrap gap-1 justify-center items-center mx-auto max-w-xl"
      v-for="c in card"
    >
      <h3 class="uppercase font-extrabold text-black font-mono">
        {{ c.title }}
      </h3>
      <img :src="c.img" alt="" class="w-full h-auto object-cover px-1" />
      <p class="text-black">{{ c.desc }}</p>
      <button class="px-5 py-3 rounded-lg bg-indigo-700 text-white my-auto">
        Learn more
      </button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      card: [
        {
          title: "Card 1",
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          desc: "image 1 okay",
        },
        {
          title: "Card 1",
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          desc: "image 1 okay",
        },
        {
          title: "Card 2",
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          desc: "image 1 okay",
        },
        {
          title: "Card 1",
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          desc: "image 1 okay",
        },
        {
          title: "Card 1",
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          desc: "image 1 okay",
        },
        {
          title: "Card 1",
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          desc: "image 1 okay",
        },
        {
          title: "Card 1",
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          desc: "image 1 okay",
        },
        {
          title: "Card 1",
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          desc: "image 1 okay",
        },
      ],
    };
  },
};
</script>

<style></style>
