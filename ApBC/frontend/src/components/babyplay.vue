<template>
    <div class="start">

        <!--
        <div class="settingsPanel" id="settingsPanel"  @mouseover="openNav();" @mouseleave="closeNav();">
            <img id="settings" :src="require('@/assets/stuff/' + settings_url)" />
            <img id="music_logo" :src="require('@/assets/stuff/' + music_url)" @click="muteSound();" />
        </div>
        -->

        <div class="outsideDiv">
            
        <div class="grid-container">
            <div class="grid-item">
                <img id="ballong" @click="pop();" :src="require('@/assets/' + map + '/' + urla)" /></div>
            <div class="grid-item">
                <img id="ballong" @click="pop();" :src="require('@/assets/' + map + '/' + urlg)" /></div>
            <div class="grid-item">
                <img id="ballong" @click="pop();" :src="require('@/assets/' + map + '/' + urlh)" /></div>
            <div class="grid-item">
                <img id="ballong" @click="pop();" :src="require('@/assets/' + map + '/' + urlk)" /></div>
            <div class="grid-item">
                <img id="ballong" @click="pop();" :src="require('@/assets/' + map + '/' + urll)" /></div>
            <div class="grid-item">
                <img id="ballong" @click="pop();" :src="require('@/assets/' + map + '/' + urlo)" /></div>
            <div class="grid-item">
                <img id="ballong" @click="pop();" :src="require('@/assets/' + map + '/' + urlp)" /></div>
            <div class="grid-item">
                <img id="ballong" @click="pop();" :src="require('@/assets/' + map + '/' + urlt)" /></div>
            <div class="grid-item">
                <img id="ballong" @click="pop();" :src="require('@/assets/' + map + '/' + urlz)" /></div>
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
                map: "baby",
                urla: "a.png",
                urlg: "g.png",
                urlh: "h.png",
                urlk: "k.png",
                urll: "l.png",
                urlo: "o.png",
                urlp: "p.png",
                urlt: "t.png",
                urlz: "z.png",


                settings_url: 'settings.png',
                music_url: 'music.png',
                musicMuted: false,
            }
        },

        created() {
         document.body.style.overflowX = "hidden";
         document.body.style.overflowY = "hidden";

        },
        mounted() {
        },

        methods: {
            pop: function () {
                console.log("pop");
                this.map = "animals"
                this.urla = "anka.png"
                this.urlg = "groda.png"
                this.urlh= "hund.png"
                this.urlk = "katt.png"
                this.urll = "lamm.png"
                this.urlo = "orm.png"
                this.urlp = "panda.png"
                this.urlt = "tiger.png"
                this.urlz = "zebra.png"

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

    .grid-item > #ballong {
        max-height: 100%;
        opacity: 0.9;
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

</style>