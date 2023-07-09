export function setSearchMeals(state, meals) {
  state.searchMeals = meals || [];
}

export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals || [];
}

export function setMealsByIngredients(state, meals) {
  state.mealsByIngredients = meals || [];
}
