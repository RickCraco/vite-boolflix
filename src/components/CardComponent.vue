<template>
    <div class="col-2">
        <img :src="img" :alt="title" class="w-100">
        <ul>
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li v-if="(lingua in store.languages)"><img :src="checkFlag()" :alt="lingua" id="flag"></li>
            <li v-else>{{ lingua }}</li>
            <li><img :src="store.myStar" :alt="voto" id="star" v-for="n in voto"></li> 
        </ul>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: 'CardComponent',
    props: {
        title: String,
        originalTitle: String,
        lingua: String,
        voto: Number,
        img: String,
    },
    data() {
        return {
            store
        }
    },
    methods:{
        checkFlag(){
            if(this.lingua === 'en'){
                return store.languages.en
            }else if(this.lingua === 'it'){
                return store.languages.it;
            }else if(this.lingua === 'de'){
                return store.languages.de;
            }else if(this.lingua === 'fr'){
                return store.languages.fr;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #flag{
        width: 2em;
    }
    #star{
        width: 1em;
    }
</style>