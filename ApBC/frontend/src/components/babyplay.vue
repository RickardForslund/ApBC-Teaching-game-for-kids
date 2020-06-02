<template>
    <div class="start">

        <div class="settingsPanel" id="settingsPanel">
            <img class= "icons" id="restart" :src="require('@/assets/' + restart_url)" @click="restart();"/>
            <router-link to="/home"><img class= "icons" id="homeIcon" :src="require('@/assets/' + home_url)"/></router-link>
            <img class= "icons" id="music_logo" :src="require('@/assets/stuff/' + music_url)" @click="muteSound();"/>



        </div>


        <div class="outsideDiv">

            <div class="grid-container">

<!--                <gridColumn1 class="gridColumn">-->
                    <div class="grid-item" @click="pop(num[0]);">
                        <img class="ballong"
                             :src="require('@/assets/' + map + '/' + animalObject.baloons[num[0]])"/>
                        <h1 class="combination">{{animalObject.letters[num[0]]}}</h1>
                    </div>

                    <div class="grid-item" @click="pop(num[1]);">
                        <img class="ballong"
                             :src="require('@/assets/' + map + '/' + animalObject.baloons[num[1]])"/>
                        <h1 class="combination">{{animalObject.letters[num[1]]}}</h1>
                    </div>

                    <div class="grid-item" @click="pop(num[2]);">
                        <img class="ballong"
                             :src="require('@/assets/' + map + '/' + animalObject.baloons[num[2]])"/>
                        <h1 class="combination">{{animalObject.letters[num[2]]}}</h1>
                    </div>
<!--                </gridColumn1>-->
<!--                <gridColumn2 class="gridColumn">-->
                    <div class="grid-item" @click="pop(num[3]);">
                        <img class="ballong"
                             :src="require('@/assets/' + map + '/' + animalObject.baloons[num[3]])"/>
                        <h1 class="combination">{{animalObject.letters[num[3]]}}</h1>
                    </div>

                    <div class="grid-item" @click="pop(num[4]);">
                        <img class="ballong"
                             :src="require('@/assets/' + map + '/' + animalObject.baloons[num[4]])"/>
                        <h1 class="combination">{{animalObject.letters[num[4]]}}</h1>
                    </div>

                    <div class="grid-item" @click="pop(num[5]);">
                        <img class="ballong"
                             :src="require('@/assets/' + map + '/' + animalObject.baloons[num[5]])"/>
                        <h1 class="combination">{{animalObject.letters[num[5]]}}</h1>
                    </div>

<!--                </gridColumn2>-->
<!--                <gridColumn3 class="gridColumn">-->
                    <div class="grid-item" @click="pop(num[6])">
                        <img class="ballong"
                             :src="require('@/assets/' + map + '/' + animalObject.baloons[num[6]])"/>
                        <h1 class="combination">{{animalObject.letters[num[6]]}}</h1>
                    </div>

                    <div class="grid-item" @click="pop(num[7]);">
                        <img class="ballong"
                             :src="require('@/assets/' + map + '/' + animalObject.baloons[num[7]])"/>
                        <h1 class="combination">{{animalObject.letters[num[7]]}}</h1>
                    </div>

                    <div class="grid-item" @click="pop(num[8]);">
                        <img class="ballong"
                             :src="require('@/assets/' + map + '/' + animalObject.baloons[num[8]])"/>
                        <h1 class="combination">{{animalObject.letters[num[8]]}}</h1>
                    </div>
<!--                </gridColumn3>-->
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
                animalObject: {
                    letters: {1: 'A', 2: 'G', 3: 'H', 4: 'K', 5: 'L', 6: '0', 7: 'P', 8: 'T', 9: 'Z'},
                    animalSounds: {
                        1: "anka.mp3", 2: "groda.mp3", 3: "hund.mp3",
                        4: "katt.mp3", 5: "lamm.mp3", 6: "orm.mp3", 7: "panda.mp3", 8: "tiger.mp3", 9: "zebra.mp3"
                    }

                    // animalSounds: [      {
                    //     id: '1',
                    //     name: 'anka',
                    //     file: new Audio('@/assets/sounds/anka.mp3)'),
                    //     isPlaying: false
                    // },{
                    //     id: '2',
                    //     name: 'anka',
                    //     file: new Audio('@/assets/sounds/anka.mp3)'),
                    //     isPlaying: false
                    // },{
                    //     id: '3',
                    //     name: 'anka',
                    //     file: new Audio('@/assets/sounds/anka.mp3)'),
                    //     isPlaying: false
                    // },{
                    //     id: '4',
                    //     name: 'anka',
                    //     file: new Audio('@/assets/sounds/anka.mp3)'),
                    //     isPlaying: false
                    // },{
                    //     id: '5',
                    //     name: 'anka',
                    //     file: new Audio('@/assets/sounds/anka.mp3)'),
                    //     isPlaying: false
                    // },{
                    //     id: '6',
                    //     name: 'anka',
                    //     file: new Audio('@/assets/sounds/anka.mp3)'),
                    //     isPlaying: false
                    // },
                    //     {
                    //     id: '7',
                    //     name: 'anka',
                    //     file: new Audio('@/assets/sounds/anka.mp3)'),
                    //     isPlaying: false
                    // },
                    //     {
                    //     id: '8',
                    //     name: 'anka',
                    //     file: new Audio('@/assets/sounds/anka.mp3)'),
                    //     isPlaying: false
                    // }
                    // ]
                    ,
                    baloons: {
                        1: "1.png", 2: "2.png", 3: "3.png",
                        4: "4.png", 5: "5.png", 6: "6.png", 7: "7.png", 8: "8.png", 9: "9.png"
                    },
                    pictures: {
                        1: "b/anka.png",
                        2: "b/groda.png",
                        3: "b/hund.png",
                        4: "b/katt.png",
                        5: "b/lamm.png",
                        6: "b/orm.png",
                        7: "b/panda.png",
                        8: "b/tiger.png",
                        9: "b/zebra.png"
                    },
                    timesClicked:0

                },
                num: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                home_url: "home.png",
                restart_url:"restart.png",
                map: "baby",
                settings_url: 'settings.png',
                music_url: 'music.png',
                musicMuted: false,
                timeout: false

            }
        },

        created() {
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "hidden";


            console.log("-----Random-----");

            this.numberGenerator();

            console.log("Array size is: " + this.num.length);
            console.log("random numbers is " + this.num);
            console.log("----End-----");

        },
        mounted() {
        },

        methods: {

            pop: function (name) {

                if (this.musicMuted == false && this.timeout == false) {
                    const sound = (new Audio(require('@/assets/sounds/' + this.animalObject.animalSounds[name])));
                    console.log(this.num[name])

                    this.animalObject.letters[name] = "";
                    this.animalObject.baloons[name] = this.animalObject.pictures[name]

                    sound.play();


                }
                this.timeout = true

                setTimeout(() => {
                    this.timeout = false

                }, 5000);

            },

            // pauseAudio: function

            numberGenerator: function () {

                for (let i = this.num.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * i)
                    const temp = this.num[i]
                    this.num[i] = this.num[j]
                    this.num[j] = temp
                }

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
            },

            restart: function(){
                location.reload();
            }
        }
    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');

    .combination {
        position: absolute;
        color: white;
        vertical-align: top;

    }

    .logo:hover {
        transform: scale(0.9, 0.9);
        -webkit-transform: scale(0.9, 0.9);
        -moz-transform: scale(0.9, 0.9);
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(3, auto);
        grid-template-areas: "gridColumn1" "gridColumn2" "gridColumn3";
        grid-gap: 0px;
        width: 99vw;
        height: 87vh;
        background-image: url("../assets/baby/background.jpg");
        border-radius: 30px;
        background-repeat: no-repeat;
        background-size: cover;

        padding: 0px;

    }

    .grid-item {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        font-family: "Patua One";
        font-size: 3rem;
        font-weight: bold;
        width: 30vw;
        height: 30vh;
    }

    .grid-item:hover {
        cursor: pointer;
    }

    .grid-item > .ballong {
        max-height: 70%;
        opacity: 0.9;


    }

    .settingsPanel {
        transition: 0.5s;
        padding: 15px;
        opacity: 1;
    }

    #homeIcon {
        height: 75px;
        margin-top: 10px;
        padding-right: 15px;
    }

    #restart {
        height: 75px;
        margin-top: 10px;
        padding-right: 15px;
    }

    #music_logo {
        /*margin: 39.5px 0 0 0;*/
        margin-top: 20px;
        height: 60px;
        background-color: #3a8bb1;
    }

    .icons {

        cursor: pointer;
    }
</style>