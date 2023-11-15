<template>
  <div>

  </div>
</template>

<script>
  import axios from 'axios';
  import { store } from './store';

  export default {
    name: 'App',
    data(){
      return{
        store
      }
    },
    methods: {
      getMovieList(){
        const url = store.apiUrl + store.endpoint.movie;
        axios.get(url, store.params).then((response) =>{
          store.movieList = response.data.results;
          console.log(store.movieList);
        })
      },
      getSeriesList(){
        const url = store.apiUrl + store.endpoint.series;
        axios.get(url, store.params).then((response) =>{
          store.seriesList = response.data.results;
          console.log(store.seriesList);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>