<template>
    <header class="bg-black py-3">
        <div class="container d-flex align-items-center justify-content-between">
            <div>
                <h1>BOOLFLIX</h1>
            </div>
            <div class="d-flex">
                <input type="text" @keyup.enter="searchFilms(), searchTV()" v-model="searchString" class="form-control mx-3" placeholder="Cerca i tuoi film o serie preferiti">
                <button @click="searchFilms(), searchTV()" class="btn btn-danger">Cerca</button>
            </div>
        </div>
    </header>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
            searchString:''
        }
    },
    methods:{
        searchFilms(){
            if(this.searchString === ''){
                const url = store.trendingUrl;
                axios.get(url + store.params.api_key).then((response) =>{
                store.movieList = response.data.results;
            })
            }else{
                store.params.query = this.searchString;
            }
            const url = store.apiUrl + store.endpoint.movie;
            axios.get(url, {params: store.params}).then((response) =>{
                store.movieList = response.data.results;
            })
        },
        searchTV(){
            if(this.searchString === ''){
                store.params.query = 'a';
            }else{
                store.params.query = this.searchString;
            }
            const url = store.apiUrl + store.endpoint.series;
            axios.get(url, {params: store.params}).then((response) =>{
                store.seriesList = response.data.results;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: red;
}

input{
    width: 400px !important;
}
</style>