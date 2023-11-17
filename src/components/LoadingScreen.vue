<template>
    <div class="d-flex justify-content-center align-items-center bg-black w-100 vh-100" v-if="!store.videoFlag">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="logo">
        <div>
            <button class="btn btn-danger" @click="enterBtn">ENTER</button>
        </div>
    </div>
    <div v-else>
        <video autoplay muted>
            <source src="/Netflix_Intro.mp4">
        </video>
    </div>
</template>

<script>
    import { store } from '../store';
    export default {
        name: 'LoadingScreen',
        data(){
            return{
                store
            }
        },
        methods: {
            introF(){
                setTimeout(() =>{
                    store.loadingFlag = true;
                }, 4000)
            },
            enterBtn(){
                store.videoFlag = true;
                this.introF();
            }
        },
        created(){
        }
    }
</script>

<style lang="scss" scoped>
    video{
        width: 100%;
        height: 100%;
    }
</style>