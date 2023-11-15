<template>
</template>

<script>
  import axios from 'axios';
  import { store } from './store';
  import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
    },
    data(){
      return{
        store
      }
    },
    methods: {
      getMovieList(){
        const url = store.apiUrl + store.endpoint.movie;
        axios.get(url, {params: store.params}).then((response) =>{
          store.movieList = response.data.results;
          console.log(store.movieList);
        })
      },
      getSeriesList(){
        const url = store.apiUrl + store.endpoint.series;
        axios.get(url, {params: store.params}).then((response) =>{
          store.seriesList = response.data.results;
          console.log(store.seriesList);
        })
      }
    },
    created(){
    }
  }
</script>

<style lang="scss" scoped>

</style>