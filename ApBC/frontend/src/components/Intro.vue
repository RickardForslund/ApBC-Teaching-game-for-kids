<template>
    <div class="hello">
        <div class="gameScreen">
        <!--<p>
            Hur gammal <br/> är du ?</p>
            Jag heter Po.<br/>
            Kan du hjälpa mig <br/> och min kompis Leo <br/> att lära oss bokstäver <br/> och alfabetet?
        -->
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
            grid-template-areas:
                'main'
                'down';
            grid-gap: 10px;
            text-align: center;
        }

        p {
            font-family: 'Patua One';
            font-size: 40px;
            color: darkgreen;
            padding: 10px;
            text-align: center;
        }

        a {
            color: #b97992;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 40px;
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

        .img_intro:hover {
            background-color: white;
        }

        .button {
            grid-area: down;
            width: 50%;
            height: auto;
            display: block;
            margin: 0 auto;
            font-size: 20px;
            color: darkgreen;
            padding: 10px;
            text-align: center;
        }
    }
</style>