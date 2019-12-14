export const state = () => ({
  title: 'Weirdness Calculator',
  empty_text: 'No results were found with the term entered, try another term.',
  search_message: 'Send new search terms until you have 5 favorites.',
  favorites: []
});

export const mutations = {
  ADD_TO_FAVORITES(state, payload) {
    state.favorites.push({ ...payload.data, weirdness: payload.weirdness });
  },
  REMOVE_FROM_FAVORIRES() {}
};
export const getters = {
  total_favorites: (state) => state.favorites.length
};
