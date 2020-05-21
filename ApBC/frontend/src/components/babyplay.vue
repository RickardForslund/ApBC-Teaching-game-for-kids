<template>
    <div class="start">
        <menu>
            <ul id="head-menu" class="nav">

                <li id="logo" class="logo">
                    <router-link to="/Home"><img alt="ApBC" :src="require('@/assets/' + logoUrl)" /></router-link>
                </li>

            </ul>
        </menu>
    </div>
</template>

<script>
    export default {
        name: "babyplay",
        props: {
            imageUrl: String,
            logoUrl: String
        },
    }
</script>

<style scoped>
    .logo:hover {
        transform: scale(1.1, 1.1);
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
    }
</style>