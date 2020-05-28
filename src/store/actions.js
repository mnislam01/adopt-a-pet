export default {
  addPet: function ({ commit }, payload) {
    commit('appendPet', payload)
  }
}
