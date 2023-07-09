<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl object-cover w-full h-60"
      />
    </router-link>
    <h3 class="p-3 font-bold">{{ meal.strMeal }}</h3>
    <p class="mb-4 px-3">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod
      excepturi doloremque aut id quo.
    </p>
    <div class="mb-4 flex items-center justify-between px-3">
      <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";

const { meal } = defineProps({
  meal: Object,
});
</script>
