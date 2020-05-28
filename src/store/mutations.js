export default {
  appendPet: function (state, { species, pet }) {
    state[species].push(pet)
  }
}
