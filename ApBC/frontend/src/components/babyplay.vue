<template>
    <div class="start">


        <div class="settingsPanel" id="settingsPanel"  >
            <router-link to="/home"> <img id="homeIcon" :src="require('@/assets/' + home_url)" /></router-link>
            <img id="music_logo" :src="require('@/assets/stuff/' + music_url)" @click="muteSound();" />
        </div>


        <div class="outsideDiv">

        <div class="grid-container">

            <gridColumn1 class="gridColumn">
            <div class="grid-item">
                <img id="ballong" @click="pop(numberArray[0]);" :src="require('@/assets/' + map + '/' + numberArray[0] + '.png')" />
                <div class="combination"><h1>{{letters[numberArray[0]]}}</h1></div></div>

            <div class="grid-item">
                <img id="ballong" @click="pop(numberArray[1]);" :src="require('@/assets/' + map + '/' + numberArray[1] + '.png')" />
                <div class="combination"><h1>{{letters[numberArray[1]]}}</h1></div></div>

            <div class="grid-item">
                <img id="ballong" @click="pop(numberArray[2]);" :src="require('@/assets/' + map + '/' + numberArray[2] + '.png')" />
                <div class="combination"><h1>{{letters[numberArray[3]]}}</h1></div></div>
            </gridColumn1>
            <gridColumn2 class="gridColumn">
            <div class="grid-item">
                <img id="ballong" @click="pop(numberArray[3]);" :src="require('@/assets/' + map + '/' + numberArray[3] + '.png')" />
                <div class="combination"><h1>{{letters[numberArray[3]]}}</h1></div></div>

            <div class="grid-item">
                <img id="ballong" @click="pop(numberArray[4]);" :src="require('@/assets/' + map + '/' + numberArray[4] + '.png')" />
                <div class="combination"><h1>{{letters[numberArray[4]]}}</h1></div></div>

            <div class="grid-item">
                <img id="ballong" @click="pop(numberArray[5]);" :src="require('@/assets/' + map + '/' + numberArray[5] + '.png')" />
                <div class="combination"><h1>{{letters[numberArray[5]]}}</h1></div></div>

            </gridColumn2>
            <gridColumn3 class="gridColumn">
            <div class="grid-item">
                <img id="ballong" @click="pop(numberArray[6]);" :src="require('@/assets/' + map + '/' + numberArray[6] + '.png')" />
                <div class="combination"><h1>{{letters[numberArray[6]]}}</h1></div></div>

            <div class="grid-item">
                <img id="ballong" @click="pop(numberArray[7]);" :src="require('@/assets/' + map + '/' + numberArray[7] + '.png')" />
                <div class="combination"><h1>{{letters[numberArray[7]]}}</h1></div></div>

            <div class="grid-item">
                <img id="ballong" @click="pop(numberArray[8]);" :src="require('@/assets/' + map + '/' + numberArray[8] + '.png')" />
                <div class="combination"><h1>{{letters[numberArray[8]]}}</h1></div></div>
            </gridColumn3>
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
            // ,
            // animalSounds:Object
        },
        data: function () {
            return {
                numberArray: [],
                letters:{1:'A', 2:'G', 3:'H', 4:'K', 5:'L', 6:'0', 7:'P', 8:'T', 9:'Z'},
                animalSounds:{1:"anka.mp3", 2:"gruda.mp3", 3:"hund.mp3",
                    4:"katt.mp3", 5:"lamm.pm3", 6:"orm.mp3", 7:"panda.mp3", 8:"tiger.mp3", 9:"zebra.mp3"},
                home_url:"home.png",
                map: "baby",
                settings_url: 'settings.png',
                music_url: 'music.png',
                musicMuted: false,
                timeout: false,

            }
        },

        created() {
         document.body.style.overflowX = "hidden";
         document.body.style.overflowY = "hidden";



            console.log("-----Random-----");
            while (this.numberArray.length < 9) {
                this.numberGenerator(); 
            }
            console.log("Array size is: " + this.numberArray.length);
            console.log("random numbers is " + this.numberArray);
            console.log("----End-----");
            


        

        },
        mounted() {
        },

        methods: {

            playSound: function (name) {

                if (this.musicMuted == false && this.timeout == false ) {
                    const sound = ( new Audio( require('@/assets/sounds/' +this.animalSounds[name] )));
                sound.play();
                }
                            this.timeout = true

                        setTimeout(() => {
                            this.timeout = false
                            
                        }, 5000);

            },

            pop: function (input) {
                this.playSound(input)
                
            // switch (input) {
            //     case 1
            //         this.map1 = "animals";
            //         this.urla = "anka.png"
            //         this.playSound("anka.mp3");
            //         break;
            //     case 2:
            //         this.map2 = "animals";
            //         this.urlg = "groda.png"
            //         this.playSound("groda.mp3");
            //         break;
            //     case 3:
            //         this.map3 = "animals";
            //         this.urlh = "hund.png"
            //         this.playSound("hund.mp3");
            //         break;
            //     case 4:
            //         this.map4 = "animals";
            //         this.urlk = "katt.png"
            //         this.playSound("katt.mp3");
            //         break;
            //     case 5:
            //         this.map5 = "animals";
            //         this.urll = "lamm.png"
            //         this.playSound("lamm.mp3");
            //         break;
            //     case 6:
            //         this.map6 = "animals";
            //         this.urlo = "orm.png"
            //         this.playSound("orm.m4a");
            //         break;
            //     case 7:
            //         this.map7 = "animals";
            //         this.urlp = "panda.png"
            //        this.playSound("panda.m4a");
            //         break;
            //     case 8:
            //         this.map8 = "animals";
            //         this.urlt = "tiger.png"
            //         this.playSound("tiger.mp3");
            //         break;
            //     case 9:
            //         this.map9 = "animals";
            //         this.urlz = "zebra.png"
            //         this.playSound("zebra.mp3");
            //         break;
            //     default:
            //         console.log("default value");
            //
            //         break;
            // }


            },

            numberGenerator: function () {
                
                var value = Math.floor(Math.random() * (9) + 1);
                    if (this.numberArray.includes(value)) {
                        console.log("duplicate");
                    }else{
                        this.numberArray += value
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
            }
        }
    }

</script>

<style scoped>



.combination{
    position: absolute;
    color: white;
    vertical-align: top;

}

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
        grid-template-areas:
                "gridColumn1"
                "gridColumn2"
                "gridColumn3";
        grid-gap: 0px;
        width:  100vw;
         height: 100vh;
        background-image: url("../assets/baby/background.jpg");
        background-repeat: no-repeat;
        background-size: cover;

        padding: 5% 10% 5% 10%;

    }

    .grid-item {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        font-family: Arial;
        font-size: 3rem;
        font-weight: bold;
        width:  30vw;
        height: 30vh;


    }

    .grid-item > #ballong {
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