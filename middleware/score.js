export default function({ store, redirect }) {
  if (!store.state.favorites.length) {
    redirect('/');
  }
}
