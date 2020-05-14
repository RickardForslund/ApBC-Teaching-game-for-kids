<template>
    <div class="choice">
        <!--<h1> Välj Svårighetsgrad </h1>-->
        <div class="img_choice"><img alt="Hur gammal är du?" src="../assets/choice.png" class="main_choice"/></div>
        <div class="options">
            <ul class="list">
                <li class="small">
                    <img alt="Liten" src="../assets/small.png" class="main_choice"/></li>
                <li class="mellan"><router-link to="/spel"><img alt="Stor" src="../assets/medium.png" class="main_choice"/></router-link>
                    </li>
                <li class="stor">
                    <img alt="Riktigt stor" src="../assets/big.png" class="main_choice"/></li>
            </ul></div>
    </div>
</template>

<script>
    export default {
        name: "difficultyPage"
    }
</script>

<style scoped>
    .choice {
        display: grid;
        grid-template-areas:
                'main'
                'down';
        grid-gap: 10px;
        text-align: center;
    }
    .img_choice {
        grid-area: main;
    }
    .main_choice {
        width: 50%;
        height: auto;
        display: block;
        margin: 0 auto;
    }
    .options {
        grid-area: down;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin-left: 5px;
    }
    li{
        margin-bottom: 50px;
        margin-right: 20px;
        line-height: 20px;
        display: inline;
        text-align: left;
    }
    .list {
        display: inline-block;
    }


</style>