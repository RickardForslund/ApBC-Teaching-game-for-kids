<template>
    <div class="start">

<!-------------------- Game Screen --------------------->
        <div class="game-screen">

<!-------------------- Scorebar --------------------->
            <div class="scorebar">
                 <div class="scoreitems">
                     <button class="scorebuttons" id="startbutton" @click="mytimer();">Start</button>
                     <button class="scorebuttons" id="restartbutton" @click="reset();">Restart</button>
                     <div class="scoretime" id="scoreandtimer">Guess: {{this.correct}}</div>
                     <div class="scoretime" id="scoreandtimer">time: {{timercount}}</div>
                     <div class="scorescore" id="scoreandtimer">score: {{score}}</div>
                 </div>
            </div>
<!----------------- Scorebar END --------------------->

<!-------------------- Questionbox --------------------->
            <div class="alfabetsBox">
                <ul id="example-1">
                <li v-for="item in completed" :key="item">
                    {{ item }}
                </li>
                </ul>
                </div>
<!-------------------- Questionbox END --------------------->

<!-------------------- A-Ö --------------------->
            <section id="section">
                    <div class="grid-container">
                        <div id="gridbutton" class="grid-item"></div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[0].value)">{{RandomizedValues[0].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[1].value)">{{RandomizedValues[1].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[2].value)">{{RandomizedValues[2].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[3].value)">{{RandomizedValues[3].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[4].value)">{{RandomizedValues[4].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[5].value)">{{RandomizedValues[5].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[6].value)">{{RandomizedValues[6].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[7].value)">{{RandomizedValues[7].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[8].value)">{{RandomizedValues[8].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[9].value)">{{RandomizedValues[9].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[10].value)">{{RandomizedValues[10].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[11].value)">{{RandomizedValues[11].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[12].value)">{{RandomizedValues[12].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[13].value)">{{RandomizedValues[13].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[14].value)">{{RandomizedValues[14].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[15].value)">{{RandomizedValues[15].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[16].value)">{{RandomizedValues[16].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[17].value)">{{RandomizedValues[17].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[18].value)">{{RandomizedValues[18].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[19].value)">{{RandomizedValues[19].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[20].value)">{{RandomizedValues[20].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[21].value)">{{RandomizedValues[21].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[22].value)">{{RandomizedValues[22].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[23].value)">{{RandomizedValues[23].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[24].value)">{{RandomizedValues[24].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[25].value)">{{RandomizedValues[25].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[26].value)">{{RandomizedValues[26].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[27].value)">{{RandomizedValues[27].value}}</div>
                        <div id="gridbuttons" class="grid-item" @click="clickmethod(RandomizedValues[28].value)">{{RandomizedValues[28].value}}</div>
                </div>
            </section>
<!-------------------- A-Ö END --------------------->
            <input type="button" value="TILLBAKA" onclick="history.back(-1)" class="back" />
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
            RandomizedValues: [
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''},
                {value: ''}
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
        clickmethod: function (input) {
            if (input === this.correct) {
                this.completed += input;
                this.correct = this.answers[this.add]
                this.add++;

            }else{
                console.log("Wrong letter, try again");
                console.log("correct answer is:" + this.correct);

            }
        },

        mytimer: function () {
            setInterval(() => {
                this.timercount += 1;
            }, 1000);
            
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
        }
    }
    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');

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

    #gridbutton {
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


.alfabetsBox{
        color: rgb(54, 54, 54);
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        border-radius: 30px;
        margin: 0px 3vw;
    padding: 0vh 3vw;
    font-size: 130%;
    height: auto;


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

ul{
    display: flex;
    list-style: none;
}

</style>