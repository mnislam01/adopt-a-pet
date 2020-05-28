export default {
  animalCount: function (state) {
    return state.cats.length + state.dogs.length
  }
}
