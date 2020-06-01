<template>
    <div class="hello">
        <div class="gameScreen">

        <div class="img_intro"><img alt="Hej från Po" src="../assets/intro.png" class="intro"/></div>
        <div class="button"><router-link to="/difficulty"><img alt="Next" src="../assets/go.png" class="down"/></router-link></div>
            <router-link to="/about"><div id="info" class="about"><div class="pin-text">
                <h3>Om Oss</h3>
            </div></div></router-link>
            </div></div>
</template>

<script>

</script>

<style scoped>

body{
    overflow: visible;
}

   /* @media only screen and (max-width: 870px) {*/
        .gameScreen {
            display: grid;
            grid-template-areas: 'main' 'down';
            grid-gap: 10px;
            text-align: center;
            width:  100vw;
            height: 100vh;
        }

        .img_intro {
            grid-area: main;
        }

        .intro {
            width: 50%;
            height: auto;

        }

        .down {
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

 /*   }*/
    .button {
        padding: 20px;
    }
    .button:hover, .about:hover {
        transform: scale(1.1, 1.1);
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-align: center;
    }

    .about {
        width:15%;
        height:15%;
        background-image:   url("../assets/flyinfo.png");
        background-position: top center;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
    }

    #info {
        top:20%;
        left:55%;
    }
    #info:hover> .pin-text {
        display: block;
    }

    .pin-text {
        position: absolute;
        top:50%;
        transform:translateY(-50%);
        left:80%;
        white-space: unset;
        display: none;
    }

    .pin-text h3 {
        color: blueviolet;
        text-shadow: 1px 1px 1px #b97992;
    }


</style>