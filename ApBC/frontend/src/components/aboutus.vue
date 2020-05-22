<template>
    <div class="aboutus">
        <div class="screen">
            <div class="settingsPanel" id="settingsPanel"  @mouseover="openNav();" @mouseleave="closeNav();">
                <img id="settings" :src="require('@/assets/stuff/' + settings_url)" />
                <img id="music_logo" :src="require('@/assets/stuff/' + music_url)" @click="muteSound();" />
            </div>
        </div>
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

    .screen {
        background-image: url("../assets/sceneabout.jpg");
        background-color: #cccccc;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;

        min-height: 700px;
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