<template>
    <div class="choice">
        <!--<h1> Välj Svårighetsgrad </h1>-->
        <div class="options">
            <div class="img_choice"><img alt="Hur gammal är du?" src="../assets/choice.png" id="panda_image"/></div>
            <ul class="list">
                <buttons>

                <li id="small">LITEN<router-link to="/baby"><img alt="Liten" src="../assets/small.png" class="main_choice"/></router-link></li>
                <li id="mellan">STOR<router-link to="/spel"><img alt="Stor" src="../assets/medium.png" class="main_choice"/></router-link></li>
                <li id="stor">RIKTIGT STOR<router-link to="/big"><img alt="Riktigt stor" src="../assets/big.png" class="main_choice"/></router-link></li>
                </buttons>
            </ul></div>
    </div>
</template>

<script>
    export default {
        name: "difficultyPage"
    }
</script>

<style scoped>
    buttons{
        display: grid;
        grid-template-areas:
                'small' 'mellan' 'stor';
        grid-gap: 10px;
        text-align: center;
    }


    .choice {

        height: 80vh;

    }
    .img_choice {
        grid-area: main;
        height: auto;
        padding-bottom: 5vh;
        width:auto;
        margin-left: 5%;
        margin-right: auto;
    }
    .main_choice {
        width: 10vh;
        height: auto;
        display: block;
        margin: 0 auto;
    }
    #panda_image {
        height: 30vh;
    }

    .options {
        grid-area: down;
        width:  100vw;
        height: 100vh;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0px;
        margin-left: 5px;


    }
    li{
        margin-bottom: 0px;
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
    #small:hover, #mellan:hover, #stor:hover {
        transform:scale(1.3,1.3);
        -webkit-transform:scale(1.3,1.3);
        -moz-transform:scale(1.3,1.3);
    }


</style>