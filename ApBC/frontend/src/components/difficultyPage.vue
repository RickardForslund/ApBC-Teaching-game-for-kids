<template>
    <div class="choice">
        <!--<h1> Välj Svårighetsgrad </h1>-->
        <div class="img_choice"><img alt="Hur gammal är du?" src="../assets/choice.png" class="main_choice"/></div>
        <div class="options">
            <ul class="list">
                <li class="small">LITEN<router-link to="/baby"><img alt="Liten" src="../assets/small.png" class="main_choice"/></router-link></li>
                <li class="mellan">STOR<router-link to="/spel"><img alt="Stor" src="../assets/medium.png" class="main_choice"/></router-link></li>
                <li class="stor">RIKTIGT STOR
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
        display: inline-block;
        text-align: left;
        font-size: 30px;
        font-family: 'Patua One';
        color: darkgreen;
    }
    .list {
        display: inline-block;
    }
    .small:hover, .mellan:hover, .stor:hover {
        transform:scale(1.3,1.3);
        -webkit-transform:scale(1.3,1.3);
        -moz-transform:scale(1.3,1.3);
    }


</style>