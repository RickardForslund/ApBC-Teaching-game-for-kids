<template>
    <div class="start">

<!-------------------- Game Screen --------------------->
        <div class="game-screen">

<!-------------------- Scorebar --------------------->
            <div class="scorebar">
                 <div class="scoreitems">
                     <button class="scorebuttons" id="startbutton" @click="mytimer();">Start</button>
                     <button class="scorebuttons" id="restartbutton" @click="reset();">Restart</button>
                     <div v-if="firstPage" class="scoretime" id="scoreandtimer">Guess: {{this.correct}}</div>
                     <div v-if="firstPage" class="scoretime" id="scoreandtimer">Fails: {{failcount}}</div>
                     <div v-if="firstPage" class="scorescore" id="scoreandtimer">score: {{score}}</div>
                 </div>
            </div>
<!----------------- Scorebar END --------------------->

<!-------------------- Questionbox --------------------->
            <div class="alfabetsBox" v-if="firstPage">
                <ul id="ul">
                <li id="li" v-for="item in completed" :key="item">
                    {{ item }}
                </li>
                </ul>
                </div>
<!-------------------- Questionbox END --------------------->

<!-------------------- A-Ö --------------------->
            <section id="section" v-if="firstPage">
                    <div class="grid-container">
                        <div id="correctgrid" class="grid-item">{{this.correct}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[0].clicked"  @click="clickmethod(RandomizedValues[0].value,0)">{{RandomizedValues[0].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[1].clicked"  @click="clickmethod(RandomizedValues[1].value,1)">{{RandomizedValues[1].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[2].clicked"  @click="clickmethod(RandomizedValues[2].value,2)">{{RandomizedValues[2].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[3].clicked"  @click="clickmethod(RandomizedValues[3].value,3)">{{RandomizedValues[3].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[4].clicked"  @click="clickmethod(RandomizedValues[4].value,4)">{{RandomizedValues[4].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[5].clicked"  @click="clickmethod(RandomizedValues[5].value,5)">{{RandomizedValues[5].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[6].clicked"  @click="clickmethod(RandomizedValues[6].value,6)">{{RandomizedValues[6].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[7].clicked"  @click="clickmethod(RandomizedValues[7].value,7)">{{RandomizedValues[7].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[8].clicked"  @click="clickmethod(RandomizedValues[8].value,8)">{{RandomizedValues[8].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[9].clicked"  @click="clickmethod(RandomizedValues[9].value,9)">{{RandomizedValues[9].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[10].clicked" @click="clickmethod(RandomizedValues[10].value,10)">{{RandomizedValues[10].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[11].clicked" @click="clickmethod(RandomizedValues[11].value,11)">{{RandomizedValues[11].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[12].clicked" @click="clickmethod(RandomizedValues[12].value,12)">{{RandomizedValues[12].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[13].clicked" @click="clickmethod(RandomizedValues[13].value,13)">{{RandomizedValues[13].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[14].clicked" @click="clickmethod(RandomizedValues[14].value,14)">{{RandomizedValues[14].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[15].clicked" @click="clickmethod(RandomizedValues[15].value,15)">{{RandomizedValues[15].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[16].clicked" @click="clickmethod(RandomizedValues[16].value,16)">{{RandomizedValues[16].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[17].clicked" @click="clickmethod(RandomizedValues[17].value,17)">{{RandomizedValues[17].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[18].clicked" @click="clickmethod(RandomizedValues[18].value,18)">{{RandomizedValues[18].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[19].clicked" @click="clickmethod(RandomizedValues[19].value,19)">{{RandomizedValues[19].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[20].clicked" @click="clickmethod(RandomizedValues[20].value,20)">{{RandomizedValues[20].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[21].clicked" @click="clickmethod(RandomizedValues[21].value,21)">{{RandomizedValues[21].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[22].clicked" @click="clickmethod(RandomizedValues[22].value,22)">{{RandomizedValues[22].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[23].clicked" @click="clickmethod(RandomizedValues[23].value,23)">{{RandomizedValues[23].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[24].clicked" @click="clickmethod(RandomizedValues[24].value,24)">{{RandomizedValues[24].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[25].clicked" @click="clickmethod(RandomizedValues[25].value,25)">{{RandomizedValues[25].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[26].clicked" @click="clickmethod(RandomizedValues[26].value,26)">{{RandomizedValues[26].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[27].clicked" @click="clickmethod(RandomizedValues[27].value,27)">{{RandomizedValues[27].value}}</div>
                        <div id="gridbuttons" class="grid-item" v-if="RandomizedValues[28].clicked" @click="clickmethod(RandomizedValues[28].value,28)">{{RandomizedValues[28].value}}</div>
                </div>
            </section>
            <div class="startText" v-else>
               <h1>Press the Start Button</h1>
            </div>
<!-------------------- A-Ö END --------------------->
            <input v-if="firstPage" type="button" value="TILLBAKA" onclick="history.back(-1)" class="back" />
        </div>
<!-------------------- Game Screen END --------------------->
    </div>
</template>

<script>
    export default {
        name: "bigplay",
        props: {},
    data: function () {
        return {
            letters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Å','Ä','Ö'],
            answers: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Å','Ä','Ö'],
            add: 1,
            correct: 'A',
            score: 0,
            timercount: 0,
            completed: [],
            firstPage: false,
            failcount: 0,
            RandomizedValues: [
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true},
                {value: '', clicked: true}
                ],

            timer: [
                {
                    value: null,
                    active: false
                }
            ],
        }
    },

    created() {
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "hidden";
        this.randomizeLetters();
        console.log("correct answer is:" + this.correct);
        

        
    },
    mounted() {


    },

    methods: {
        clickmethod: function (input,nr) {
                console.log(nr);
                
            if (input === this.correct) {
                this.completed += input;
                this.correct = this.answers[this.add]
                this.add++;
                this.scorecalc(100,0);
                this.RandomizedValues[nr].clicked = false

            }else{
                console.log("Wrong letter, try again");
                this.failcount += 1
                this.scorecalc(0 , -100);


            }
        },

        scorecalc: function (value1 , value2) {
            this.score += (value1 + value2);
            
        },

        mytimer: function () {
            setInterval(() => {
                this.timercount += 1;
            }, 1000);
            this.firstPage = true
        },
        randomizeLetters: function () {
            for (let i = 0; i < this.RandomizedValues.length; i++) {
                let randvalue = Math.floor((Math.random() * this.letters.length))
                this.RandomizedValues[i].value = this.letters[randvalue];
                this.letters.splice(randvalue,1)
 }


      this.currentID = Math.floor((Math.random() * 10) + 1);
            
        },


        reset: function () {
            this.timercount = 0;
            this.firstPage = false
            this.score = 0;
            this.failcount = 0;
        }
    }
    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');


ul{
    font-size: 5vh;
    padding: 1vw 1vh;
}

li{
    padding: 0px;
}

.alfabetsBox{
        color: rgb(54, 54, 54);
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        border-radius: 30px;
        margin: 1vh 3vw;
        
    height: auto;
}


    .startText{
  background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, rgb(207, 255, 34)), color-stop(0.9, #ff2), color-stop(1, #f22) );
  background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
  color:transparent;
  -webkit-background-clip: text;
  background-clip: text;
    font-size: 3rem;

margin-bottom: 90%;
    }

    .scoreitems{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        padding: 0px;

    }   

    .scorebar {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        padding: 1%;
        background-color: rgba(255, 228, 196, 0.555);
        height: 5vh;
        
    }

        .scorebuttons{
        box-shadow: 1px 1px #888888;
        background-color: rgba(7, 7, 7, 0.6);
        color: white;
        border-radius: 1rem;
        max-width: 90%;
        border: hidden;
        box-shadow: 0 9px rgba(7, 7, 7, 0.8);
        }

        .scorebuttons:hover{

        background-color: rgba(7, 7, 7, 0.7);
            cursor: pointer;
    }

    .scorebuttons:active {

        box-shadow: 0 5px rgba(7, 7, 7, 0.8);
        transform: translateY(4px);
    }

        .scorebuttons::backdrop{
        transition: 0.4s;
        background-color: rgba(7, 7, 7, 0.7);
    }
    



    #scoreandtimer{

        margin-top: 1vh;
    }



    .grid-container {
        display: inline-grid;
        grid-template-columns: repeat(5, auto);
        grid-template-rows: repeat(6, auto);
        grid-gap: 5px;
        width: auto;
        height: auto;
        border-radius: 30px;
        margin-left: auto;
        margin-right: auto;
        padding: 0px;
    }

    .grid-item {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        font-family: Arial;
        font-size: 3rem;
        font-weight: bold;
        width: auto;
        height: auto;

    }

    #correctgrid {
        /*
        
        background-image: url("../assets/apbcb.png");
        background-color: white;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border-radius: 15px;
        text-align: center;
        height: 9vh;
        width: 16vw;
        margin: 0.1vh;
         */

         
        background-color: rgb(43, 43, 43);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border-radius: 15px;
        text-align: center;
        height: 9vh;
        width: 16vw;
        margin: 0.1vh;
        color: rgb(255, 142, 67);
        font-size: 5rem;
    }

    #gridbuttons{
        background-color: rgba(0, 100,0, 0.9);
        border-radius: 15px;
        text-align: center;
        height: 9vh;
        width: 16vw;
        margin: 0.1vh;
        font-size: 40px;
        font-family: 'Patua One';
        line-height: 50px;
        color: white;
        position: relative;

    }

    #gridbuttons:hover{
        background-color: #003e0d;
        cursor: pointer;
    }


    .start{
        background-color: white;
        color: white;
        padding: 0px;
        font-size: 20px;
    }

    .game-screen{

        font-family: 'Patua One';
        background-image: url("../assets/background3.png");
        background-color: #cccccc;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        width: 100vw;

        margin: 0px;
        display: grid;
        margin-left: auto;
        margin-right: auto;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-template-areas:"questions" "buttons";
        grid-gap: 10px;
        touch-action: manipulation;


    }


    section{
        color: rgb(54, 54, 54);
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        border-radius: 30px;
        margin: 0vh 3vw 0vh 3vw;
        padding-top: 2vh;
        padding-bottom: 2vh;
        text-align: center;
    }




.back {
    background-color:  darkgreen;
    border-radius:30px;
    text-align: center;
    height: 70%;
    margin: 0px 3vw;
    opacity: 0.9;
    font-size: 3vw;
    font-family: 'Patua One';
    /*line-height: 100px;*/
    color: white;
    display: grid;
    padding: 0px;
    }

.back:hover {
    cursor: pointer;
    background-color: #003e0d;

}

ul{
    display: flex;
    list-style: none;
}

</style>