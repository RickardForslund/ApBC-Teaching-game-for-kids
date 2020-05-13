<template>
    <div class="hello">
        <div class="gameScreen">
        <!--<p>
            Hej vännen!<br/>
            Jag heter Po.<br/>
            Kan du hjälpa mig <br/> och min kompis Leo <br/> att lära oss bokstäver <br/> och alfabetet?
        </p>-->
        <div class="img_intro"><img alt="Hej från Po" src="../assets/intro.png" class="intro"/></div>
        <!--<div class="button"><img alt="Next" src="../assets/go.png" /></div>-->
            <router-link to="/difficulty"><img alt="Next" src="../assets/go.png" /></router-link>
</div></div>
</template>

<script>
    // import HelloWorld from "@/components/HelloWorld.vue";
    //
    // export default {
    //     name: "QuizPlay2",
    //     components: {
    //         HelloWorld
    //     }
    // }
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
            font-size: 30px;
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

        .button:hover {

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