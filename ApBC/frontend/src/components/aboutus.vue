
<template>
    <div class="aboutus">
        <div class="screen">
            <div class="settingsPanel" id="settingsPanel"  @mouseover="openNav();" @mouseleave="closeNav();">
                <img id="settings" :src="require('@/assets/stuff/' + settings_url)" />
                <img id="music_logo" :src="require('@/assets/stuff/' + music_url)" @click="muteSound();" />
            </div>

            <span class="omoss">
    <span>O</span>
    <span>m</span>
    <span class="padd"></span>
    <span>O</span>
    <span>s</span>
    <span>s</span>
</span>
            <div class="present">
                <h3>Hej! Här är vi som skapade detta spelet. Tack för oss &#10084; </h3>
            </div>

            <div class="outer">
                <div class="grid-container">

                    <div class="grid-item-1"><img alt="anka" src="../assets/animals/anka.png" class="button" /></div>
                    <div class="grid-item-2"><img alt="katt" src="../assets/animals/katt.png" class="button"/></div>
                    <div class="grid-item-3"><img alt="gris" src="../assets/animals/gris.png" class="button"/></div>
                    <div class="grid-item-4"><img alt="panda" src="../assets/animals/panda.png" class="button"/></div>
                </div>
            </div>
            <!--<div class="wrapper">
                <div class="sliding-background"></div>
            </div>-->
        </div>
        <input type="button" value="TILLBAKA" onclick="history.back(-1)" class="back" />
    </div>
</template>

<script>
    export default {
        name: "aboutus",
        props: {
            imageUrl: String,
            logoUrl: String,
        },


        data: function () {
            return {
                settings_url: 'settings.png',
                music_url: 'music.png',
                musicMuted: false,

            }
        },

        created() {

        },
        mounted (){

        },

        methods: {


            /*var img1 = 'anka.png',
                img2 = 'gris.png';
            var imgEl = document.getElementById('out');
            imgEl.src = (imgEl.src === img1)? img2:img1;*/
        },

        openNav: function () {
            console.log("openNav");
            document.getElementById('settingsPanel').style.right = "0px"
        },

        closeNav: function () {
            console.log("closeNav");
            document.getElementById('settingsPanel').style.right = "-170px";
        },

        muteSound: function () {
            if (this.musicMuted == true) {
                document.getElementById('music_logo').style.backgroundColor = "#3a8bb1";
                this.musicMuted = false

            } else {
                document.getElementById('music_logo').style.backgroundColor = "red";
                this.musicMuted = true

            }
        }
    }



</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');

    .grid-item-1 {
        position:relative;
    }
    .grid-item-1 .first {
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        z-index:-1;
    }
    .preview .second {
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        visibility:hidden;
        z-index:1;
    }

    span.padd{padding-left:10px;}
    html {
        height:90%;
    }

    body {
        background:#3F485B;
        display:flex;
        align-items:center;
        height:90%;
    }
    .omoss {
        padding: 180px;
        margin:1em auto;
        font-family:"Patua One";
    }
    .omoss span {

        font-size:4em;
        color: chartreuse;
        display: inline-flex;
        /*box-shadow:inset 0 0 5px rgba(0,0,0,0.3), 0 5px 0 #ccc;*/
        padding: 0 8px;
        line-height: 100px;
        animation:jumb 2s infinite;
    }
    @keyframes jumb {
        0% {
            transform:translateY(0px)
        }
        50% {
            transform:translateY(-30px);
            /*box-shadow:0 15px 0 rgb(242, 198, 64);*/
        }
        100% {
            transform:translateY(0px)
        }
    }
    .omoss span:nth-child(1) {
        animation-delay:0s;
    }
    .omoss span:nth-child(2) {
        animation-delay:.1s;
    }
    .omoss span:nth-child(3) {
        animation-delay:.2s;
    }
    .omoss span:nth-child(4) {
        animation-delay:.3s;
    }
    .omoss span:nth-child(5) {
        animation-delay:.4s;
    }
    .omoss span:nth-child(6) {
        animation-delay:.5s;
    }

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, auto);
        grid-gap: 1px;
        width: 100vw;
        height: 100vh;
        justify-items: auto;
    }

    .button {
        width: 50%;
        height: auto;
    }
    .button:hover {

    }

    .grid-item-1:hover {
        background-color: red;

    }
    .grid-item-2:hover {
        background-color: limegreen;
    }
    .grid-item-3:hover {
        background-color: blueviolet;
    }
    .grid-item-4:hover {
        background-color: yellow;
    }
    .grid-item-1 {
        justify-content: center;
        align-items: center;
        display: flex;
        background: rgba(168, 200, 102, 0.8);
    }
    .grid-item-2 {
        justify-content: center;
        align-items: center;
        display: flex;
        background: rgba(168, 200, 102, 0.8);
    }
    .grid-item-3 {
        justify-content: center;
        align-items: center;
        display: flex;
        background: rgba(168, 200, 102, 0.8);
    }
    .grid-item-4 {
        justify-content: center;
        align-items: center;
        display: flex;
        background: rgba(168, 200, 102, 0.8);
    }

    aboutus{
        display: grid;
        margin-left: auto;
        margin-right: auto;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas:"main";
        grid-gap: 10px;

    }
    .screen {
        background-image: url("../assets/sceneabout.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
        min-height: 870px;
        display: grid;
        grid-template-rows: auto;
        grid-template-areas:"main";

    }
    .settingsPanel{
        position: absolute;
        right: -170px;
        transition: 0.5s;
        padding: 15px;
        display: flex;
        opacity: 1;
    }
    #settings{
        height: 100px;
        margin-top: 10px;
    }

    #music_logo{
        margin: 39.5px 0 0 0;
        height: 41px;
        background-color: #3a8bb1;
    }
    .back {
        background-color:  darkgreen;
        border-radius: 15px;
        text-align: center;
        height: 100px;
        margin: 10px;
        opacity: 0.9;
        font-size: 50px;
        font-family: 'Patua One';
        line-height: 100px;
        color: white;
    }
    .back:hover {
        background-color: #003e0d;
    }

    /*.wrapper {
        overflow: hidden;
    }

    .sliding-background {
        background: url("../assets/sceneabout.jpg") repeat-x;
        height: 560px;
        width: 5076px;
        animation: slide 60s linear infinite;
    }

    @keyframes slide{
        0%{
            transform: translate3d(0, 0, 0);
        }
        100%{
            transform: translate3d(-1692px, 0, 0);
        }
    }*/

    .present {

        height: 50px;
        overflow: hidden;
        position: center;
    }
    .present h3 {
        font-family: "Patua One";
        font-size: 4em;
        color: crimson;
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        line-height: 50px;
        text-align: center;
        /* Starting position */
        -moz-transform:translateX(100%);
        -webkit-transform:translateX(100%);
        transform:translateX(100%);
        /* Apply animation to this element */
        -moz-animation: present 20s linear infinite;
        -webkit-animation: present 20s linear infinite;
        animation: present 20s linear infinite;
    }
    /* Move it (define the animation) */
    @-moz-keyframes present {
        0%   { -moz-transform: translateX(100%); }
        100% { -moz-transform: translateX(-100%); }
    }
    @-webkit-keyframes example1 {
        0%   { -webkit-transform: translateX(100%); }
        100% { -webkit-transform: translateX(-100%); }
    }
    @keyframes present {
        0%   {
            -moz-transform: translateX(100%); /* Firefox bug fix */
            -webkit-transform: translateX(100%); /* Firefox bug fix */
            transform: translateX(100%);
        }
        100% {
            -moz-transform: translateX(-100%); /* Firefox bug fix */
            -webkit-transform: translateX(-100%); /* Firefox bug fix */
            transform: translateX(-100%);
        }
    }

</style>