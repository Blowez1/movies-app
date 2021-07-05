<template>
  <div class="movie d-flex">
    <div class="loading-skeleton" v-if="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>

    <img
      v-else
      :src="
        'https://www.themoviedb.org/t/p/w220_and_h330_face' + movie.poster_path
      "
      :title="movie.original_title"
      :alt="movie.original_title"
      class="movie-img"
    />

    <div class="right-side">
      <div class="movie-title h3 mb-2">{{ movie.original_title }}</div>
      <p class="movie-desc mb-2">
        {{ movie.overview }}
      </p>
      <div class="movie-vote">
        <span class="badge badge-success">{{ movie.vote_average }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      movieId: this.$route.params.id,
      movie: [],
      isLoading: true,
    };
  },
  methods: {
    getMovie() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            this.movieId +
            "?api_key=987a0827e3bbf71d65e6be5fa523f11a&language=en-US"
        )
        .then((response) => {
          this.movie = response.data;
        })
        .finally(() => {
            setTimeout(() => {
                this.isLoading = false
            },150) 
        });
    },
  },
  mounted() {
    this.getMovie();
  },
  watch: {
    $route() {
      this.getMovie();
    },
  },
};
</script>
<style lang="scss">
.movie {
  margin-top: 100px;
}
.right-side {
  margin-left: 45px;
}

</style>