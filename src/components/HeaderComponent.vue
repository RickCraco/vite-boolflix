<template>
    <header class="bg-black">
        <div class="container d-flex align-items-center justify-content-between">
            <div>
                <h1>BOOLFLIX</h1>
            </div>
            <div>
                <input type="text" @keyup.enter="searchFilms" v-model="movieString">
                <button>Cerca</button>
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
            movieString:''
        }
    },
    methods:{
        searchFilms(){
            if(this.movieString === ''){
                store.params.query = 'a';
            }else{
                store.params.query = this.movieString;
            }
            const url = store.apiUrl + store.endpoint.movie;
            axios.get(url, {params: store.params}).then((response) =>{
                store.movieList = response.data.results;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: red;
}
</style>