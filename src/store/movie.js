import { Store } from "../core/yuhyeon";

const store = new Store({
  searchText: "",
  page: 1,
  movies: [],
});

export default store;
export const searchMovies = async (page) => {
  const res = await fetch(`https://omdbapi.com/?apikey=d4861326&s=${store.state.searchText}&page=${page}`);
  const json = await res.json();
  console.log(json);
};
