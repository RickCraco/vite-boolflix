<template>
    <header class="bg-black">
        <div class="container d-flex align-items-center justify-content-between">
            <div>
                <h1>BOOLFLIX</h1>
            </div>
            <div>
                <input type="text">
                <button>Cerca</button>
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: red;
}
</style>