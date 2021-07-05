<template>
  <div class="row movies">
    <div
      class="col-3 d-flex justify-content-center"
      v-for="movie in movies"
      :key="movie.id"
    >
      <router-link class="movie-item" tag="div" :to="'/movie/' + movie.id">
        <div class="loading-skeleton" v-if="isLoading">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
        <img
          v-else
          :src="
            'https://www.themoviedb.org/t/p/w220_and_h330_face' +
            movie.poster_path
          "
          :title="movie.original_title"
          :alt="movie.original_title"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: [],
      isLoading: true,
    };
  },
  methods: {
    getMovies() {
      const APIKEY = "987a0827e3bbf71d65e6be5fa523f11a";
      axios
        .get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
            APIKEY +
            "&language=en-US&page=1"
        )
        .then((response) => {
          this.movies = response.data.results;
        })
        .finally(() => {
            setTimeout(() => {
                this.isLoading = false
            },150) 
        });
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>
<style lang="scss">
.movie-item {
  margin-block: 45px;
  cursor: pointer;
}
</style>