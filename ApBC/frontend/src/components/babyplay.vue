<template>
    <div class="start">
        <div class="settingsPanel" id="settingsPanel"  @mouseover="openNav();" @mouseleave="closeNav();">
            <img id="settings" :src="require('@/assets/stuff/' + settings_url)" />
            <img id="music_logo" :src="require('@/assets/stuff/' + music_url)" @click="muteSound();" />
        </div>

        <div class="outsideDiv">
        <div class="grid-container">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
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
        grid-gap: 1px;
        width: 100vw;
        height: 100vh;
    }

    .grid-item {
        justify-content: center;
        align-items: center;
        display: flex;
        font-family: Arial;
        font-size: 3rem;
        font-weight: bold;
        background: forestgreen;
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