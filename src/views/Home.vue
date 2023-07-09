<template>
  <div>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
      There are no meals
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";

import MealItem from '../components/MealItem.vue'

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 15; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>

<style scoped></style>
