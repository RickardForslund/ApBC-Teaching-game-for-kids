<template>
    <div class="start">
        <menu>
            <ul id="head-menu" class="nav">

                <li id="logo" class="logo">
                    <router-link to="/Home"><img alt="ApBC" :src="require('@/assets/' + logoUrl)" /></router-link>
                </li>

            </ul>
        </menu>
        <div class="outsideDiv">
        <div class="grid-container">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
        </div>
    </div>
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
        transform: scale(0.9, 0.9);
        -webkit-transform: scale(0.9,0.9);
        -moz-transform: scale(0.9, 0.9);
    }

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(3, auto);
        grid-gap: 1px;
        width: 100vw;
        height: 100vh;
    }

    .grid-item {
        justify-content: center;
        align-items: center;
        display: flex;
        font-family: Arial;
        font-size: 3rem;
        font-weight: bold;
        background: forestgreen;
    }

    ul{
        list-style: none;
    }
</style>