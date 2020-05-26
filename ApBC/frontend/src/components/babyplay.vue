<template>
    <div class="start">


        <div class="settingsPanel" id="settingsPanel"  >
            <router-link to="/home"> <img id="homeIcon" :src="require('@/assets/' + home_url)" /></router-link>
            <img id="music_logo" :src="require('@/assets/stuff/' + music_url)" @click="muteSound();" />
        </div>


        <div class="outsideDiv">

        <div class="grid-container">
            <div class="grid-item">
                <img class="ballong" id="ballong1" @click="pop(1);" :src="require('@/assets/' + map1 + '/' + urla)" /></div>
            <div class="grid-item">
                <img class="ballong" id="ballong2" @click="pop(2);" :src="require('@/assets/' + map2 + '/' + urlg)" /></div>
            <div class="grid-item">
                <img class="ballong" id="ballong3" @click="pop(3);" :src="require('@/assets/' + map3 + '/' + urlh)" /></div>
            <div class="grid-item">
                <img  class="ballong" id="ballong4" @click="pop(4);" :src="require('@/assets/' + map4 + '/' + urlk)" /></div>
            <div class="grid-item">
                <img class="ballong" id="ballong5" @click="pop(5);" :src="require('@/assets/' + map5 + '/' + urll)" /></div>
            <div class="grid-item">
                <img class="ballong" id="ballong6" @click="pop(6);" :src="require('@/assets/' + map6 + '/' + urlo)" /></div>
            <div class="grid-item">
                <img class="ballong" id="ballong7" @click="pop(7);" :src="require('@/assets/' + map7 + '/' + urlp)" /></div>
            <div class="grid-item">
                <img class="ballong" id="ballong8" @click="pop(8);" :src="require('@/assets/' + map8 + '/' + urlt)" /></div>
            <div class="grid-item">
                <img class="ballong" id="ballong9" @click="pop(9);" :src="require('@/assets/' + map9 + '/' + urlz)" /></div>
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
        data: function () {
            return {
                home_url:"home.png",
                urla: "a.png",
                urlg: "g.png",
                urlh: "h.png",
                urlk: "k.png",
                urll: "l.png",
                urlo: "o.png",
                urlp: "p.png",
                urlt: "t.png",
                urlz: "z.png",
                map1: "baby",
                map2: "baby",
                map3: "baby",
                map4: "baby",
                map5: "baby",
                map6: "baby",
                map7: "baby",
                map8: "baby",
                map9: "baby",


                settings_url: 'settings.png',
                music_url: 'music.png',
                musicMuted: false,
                timeout: false,
            }
        },

        created() {
         document.body.style.overflowX = "hidden";
         document.body.style.overflowY = "hidden";

        },
        mounted() {
        },

        methods: {

            playSound: function (name) {

                if (this.musicMuted == false && this.timeout == false ) {
                    const sound = ( new Audio( require('@/assets/sounds/' + name)));
                sound.play();
                }
                            this.timeout = true

                        setTimeout(() => {
                            this.timeout = false
                        }, 5000);

            },

            pop: function (input) {

            switch (input) {
                case 1:
                    this.map1 = "animals";
                    this.urla = "anka.png"
                    this.playSound("anka.mp3");
                    document.getElementById('ballong1').style.opacity = "1";
                    break;
                case 2:
                    this.map2 = "animals";
                    this.urlg = "groda.png"
                    this.playSound("groda.mp3");
                    document.getElementById('ballong2').style.opacity = "1";
                    break;
                case 3:
                    this.map3 = "animals";
                    this.urlh = "hund.png"
                    this.playSound("hund.mp3");
                    document.getElementById('ballong3').style.opacity = "1";
                    break;
                case 4:
                    this.map4 = "animals";
                    this.urlk = "katt.png"
                    this.playSound("katt.mp3");
                    document.getElementById('ballong4').style.opacity = "1";
                    break;
                case 5:
                    this.map5 = "animals";
                    this.urll = "lamm.png"
                    this.playSound("lamm.mp3");
                    document.getElementById('ballong5').style.opacity = "1";
                    break;
                case 6:
                    this.map6 = "animals";
                    this.urlo = "orm.png"
                    this.playSound("orm.m4a");
                    document.getElementById('ballong6').style.opacity = "1";
                    break;
                case 7:
                    this.map7 = "animals";
                    this.urlp = "panda.png"
                   this.playSound("panda.m4a");
                    document.getElementById('ballong7').style.opacity = "1";
                    break;
                case 8:
                    this.map8 = "animals";
                    this.urlt = "tiger.png"
                    this.playSound("tiger.mp3");
                    document.getElementById('ballong8').style.opacity = "1";
                    break;
                case 9:
                    this.map9 = "animals";
                    this.urlz = "zebra.png"
                    this.playSound("zebra.mp3");
                    document.getElementById('ballong9').style.opacity = "1";
                    break;
                default:
                    console.log("default value");

                    break;
            }


            },

            // pauseSound: function(name){
            //     if (this.playSound){
            //
            //     }
            //
            // },

  numberGenerator: function (antal) {
                Math.floor(Math.random() * (antal - 1));
                console.log("random number is " + antal);

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
        grid-gap: 0px;
        width: 100vw;
        height: 100vh;
        background-image: url("../assets/baby/background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        padding: 70px 300px 70px 300px;
    }

    .grid-item {
        justify-content: center;
        align-items: center;
        display: flex;
        font-family: Arial;
        font-size: 3rem;
        font-weight: bold;



    }

    .ballong {
        max-height: 100%;
        opacity: 0.9;
    }
    .settingsPanel{
        position: absolute;
        left: 30px;
        transition: 0.5s;
        padding: 15px;
        display: flex;
        opacity: 1;
    }
    #homeIcon{
        height: 75px;
        margin-top: 10px;
        padding-right: 15px;
    }

    #music_logo{
        /*margin: 39.5px 0 0 0;*/
        margin-top: 20px;
        height: 60px;
        background-color: #3a8bb1;
    }

</style>