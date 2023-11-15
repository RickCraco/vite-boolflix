<template>
    <header>
        <div><h1>BOOLFLIX</h1></div>
        <div>
            <input type="text">
            <button>Cerca</button>
        </div>
    </header>
</template>

<script>
    import {store} from '../store';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        color: red;
    }
</style>