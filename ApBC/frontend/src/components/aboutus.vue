<template>
    <div class="aboutus">
        <div class="screen">
            <div class="settingsPanel" id="settingsPanel"  @mouseover="openNav();" @mouseleave="closeNav();">
                <img id="settings" :src="require('@/assets/stuff/' + settings_url)" />
                <img id="music_logo" :src="require('@/assets/stuff/' + music_url)" @click="muteSound();" />

            </div>

        </div>
        <input type="button" value="TILLBAKA" onclick="history.back(-1)" class="back" />
    </div>
</template>

<script>
    export default {
        name: "aboutus",

        data: function () {
            return {
                settings_url: 'settings.png',
                music_url: 'music.png',
                musicMuted: false,
            }
        },

        created() {
        },
        mounted() {
        },

        methods: {
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
    @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
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

</style>