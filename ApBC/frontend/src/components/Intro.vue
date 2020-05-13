<template>
    <div class="hello">
        <div class="gameScreen">
        <p>
            Hej du lille vän!<br/>
            Jag heter Po.<br/>
            Kan du hjälpa mig och min kompis Leo <br/> att lära oss bokstäver och alfabetet?
        </p>
        <div class="img_intro"><img alt="Hej från Po" src="../assets/intropo.png" /></div>
            <div class="button"><img alt="Next" src="../assets/go.png" /></div>
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
    /*@media only screen and (max-width: 870px) {*/
        .gameScreen {
            display: grid;
            grid-gap: 10px;
            grid-auto-rows: minmax(100px, auto);
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
            width: 30%;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            display: block;
            margin: 0 auto;
        }

        .img_intro:hover {
            background-color: springgreen;
        }
        .button:hover {

    }
    .button {
        width: 50%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin: 0 auto;
        font-family: "Sitka Text";
        font-size: 20px;
        color: darkgreen;
        padding: 10px;
        text-align: center;
    }

</style>