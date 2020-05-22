<template>
    <div class="hello">
        <div class="gameScreen">

        <div class="img_intro"><img alt="Hej från Po" src="../assets/intro.png" class="intro"/></div>
        <div class="button"><router-link to="/difficulty"><img alt="Next" src="../assets/go.png" class="intro"/></router-link></div>
</div></div>
</template>

<script>

</script>

<style scoped>
    @media only screen and (max-width: 870px) {
        .gameScreen {
            display: grid;
            grid-template-areas: 'main' 'down';
            grid-gap: 10px;
            text-align: center;
        }

        .img_intro {
            grid-area: main;
        }

        .intro {
            width: 50%;
            height: auto;
            display: block;
            margin: 0 auto;
        }

        .button {
            grid-area: down;
            width: 50%;
            height: auto;
            display: block;
            margin: 0 auto;
            color: darkgreen;
            padding: 10px;
        }

        .button:hover {
            transform: scale(1.1, 1.1);
            -webkit-transform: scale(1.1, 1.1);
            -moz-transform: scale(1.1, 1.1);
        }
    }
    .button {
        padding: 20px;
    }
    .button:hover {
        transform: scale(1.1, 1.1);
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
    }
</style>