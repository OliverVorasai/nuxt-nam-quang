export const state = () => ({
  language: 'en',
})

export const mutations = {
  SET_LANGUAGE_STATE(state, value) {
    state.language = value
  },
}
