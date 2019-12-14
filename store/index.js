export const state = () => ({
  title: 'Weirdness Calculator',
  empty_text: 'No results were found with the term entered, try another term.',
  search_message: 'Send new search terms until you have 5 favorites.',
  score_message: 'You can now calculate the level of weirdness you have',
  favorites: []
});

export const mutations = {
  ADD_TO_FAVORITES(state, payload) {
    state.favorites.push({ ...payload.data, weirdness: payload.weirdness });
  },
  REMOVE_FROM_FAVORIRES(state, payload) {
    const indexInFavorites = state.favorites.findIndex(
      (x) => x.id === payload.id
    );
    state.favorites.splice(indexInFavorites, 1);
  },
  START_OVER(state) {
    state.favorites = [];
  }
};
export const getters = {
  total_favorites: (state) => state.favorites.length,
  score_message_count: (state, getters) =>
    'You must Like ' +
    (5 - getters.total_favorites) +
    ' more GIT to calculate your score',
  score: (state) =>
    Math.round(
      state.favorites.reduce((i, value) => i + value.weirdness, 0) /
        state.favorites.length
    ),
  result_message: (state, getters) =>
    'You scored an ' + getters.score + ' out of 10 on the weirdness scale!'
};
