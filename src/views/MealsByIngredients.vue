<template>
  <div>
    <h1 class="text-4xl font-vold bg-white p-5 px-8">{{ route.params.ingredients }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 bg-white">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

import MealItem from "../components/MealItem.vue";

const route = useRoute();

const meals = computed(() => store.state.mealsByIngredients);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredients);
});
</script>

<style scoped></style>
