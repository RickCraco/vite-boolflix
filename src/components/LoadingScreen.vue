<template>
    <video autoplay muted>
        <source src="/Netflix_Intro.mp4">
    </video>
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
            }
        },
        created(){
            this.introF();
        }
    }
</script>

<style lang="scss" scoped>
    video{
        width: 100%;
        height: 100%;
    }
</style>