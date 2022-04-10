// all the actions are async

export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}
