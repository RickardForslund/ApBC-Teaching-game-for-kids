<template>
    <div class="start">

<!-------------------- Game Screen --------------------->
        <div class="game-screen">

<!-------------------- Scorebar --------------------->
            <div class="scorebar">
                 <div class="scoreitems">
                     <button class="startbutton" id="scorebuttons" @click="mytimer();">Start</button>
                     <button class="restartbutton" id="scorebuttons" @click="reset();">Restart</button>
                     <div class="scoretime" id="scoreandtimer">time: {{timercount}}</div>
                     <div class="scorescore" id="scoreandtimer">score: {{score}}</div>
                 </div>
            </div>
<!----------------- Scorebar END --------------------->

<!-------------------- Questionbox --------------------->
            <div id="quest-box">
                <h1>A</h1>
                
            </div>
<!-------------------- Questionbox END --------------------->

<!-------------------- A-Ö --------------------->
            <section id="section">
                    <div class="grid-container">
                        <div id="gridbuttons" class="grid-item"><button>A</button></div>
                        <div id="gridbuttons" class="grid-item"><button>B</button></div>
                        <div id="gridbuttons" class="grid-item"><button>C</button></div>
                        <div id="gridbuttons" class="grid-item"><button>D</button></div>
                        <div id="gridbuttons" class="grid-item"><button>E</button></div>
                        <div id="gridbuttons" class="grid-item"><button>F</button></div>
                        <div id="gridbuttons" class="grid-item"><button>G</button></div>
                        <div id="gridbuttons" class="grid-item"><button>H</button></div>
                        <div id="gridbuttons" class="grid-item"><button>I</button></div>
                        <div id="gridbuttons" class="grid-item"><button>J</button></div>
                        <div id="gridbuttons" class="grid-item"><button>K</button></div>
                        <div id="gridbuttons" class="grid-item"><button>L</button></div>
                        <div id="gridbuttons" class="grid-item"><button>M</button></div>
                        <div id="gridbuttons" class="grid-item"><button>N</button></div>
                        <div id="gridbuttons" class="grid-item"><button>O</button></div>
                        <div id="gridbuttons" class="grid-item"><button>P</button></div>
                        <div id="gridbuttons" class="grid-item"><button>Q</button></div>
                        <div id="gridbuttons" class="grid-item"><button>R</button></div>
                        <div id="gridbuttons" class="grid-item"><button>S</button></div>
                        <div id="gridbuttons" class="grid-item"><button>T</button></div>
                        <div id="gridbuttons" class="grid-item"><button>U</button></div>
                        <div id="gridbuttons" class="grid-item"><button>V</button></div>
                        <div id="gridbuttons" class="grid-item"><button>W</button></div>
                        <div id="gridbuttons" class="grid-item"><button>X</button></div>
                        <div id="gridbuttons" class="grid-item"><button>Y</button></div>
                        <div id="gridbuttons" class="grid-item"><button>Z</button></div>
                        <div id="gridbuttons" class="grid-item"><button>Å</button></div>
                        <div id="gridbuttons" class="grid-item"><button>Ä</button></div>
                        <div id="gridbuttons" class="grid-item"><button>Ö</button></div>
                </div>
            </section>
<!-------------------- A-Ö END --------------------->

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
            //  scorebar
            score: 0,
            timercount: 0,

            //

        }
    },

    created() {
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "hidden";
    },
    mounted() {


    },

    methods: {
        mytimer: function () {
            setInterval(() => {
                this.timercount += 1;
            }, 1000);
            
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
        grid-template-columns: repeat(4, 1fr);
        padding: 0px;

    }   

    .scorebar {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        padding: 1%;
        background-color: rgba(255, 228, 196, 0.555);
        height: 5vh;
        
    }

        #scorebuttons{
        box-shadow: 1px 1px #888888;
        background-color: rgba(7, 7, 7, 0.596);
        color: white;
        border-radius: 1rem;
        max-width: 90%;
        border: hidden;
        }

        #scorebuttons:hover{
        transition: 0.4s;
        background-color: rgba(7, 7, 7, 0.747);
    }

        #scorebuttons::backdrop{
        transition: 0.4s;
        background-color: rgba(7, 7, 7, 0.596);
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
        margin-left: 10%;
        margin-right: 10%;
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

    #gridbuttons{
        background-color: rgba(0, 100,0, 0.9);
        border-radius: 15px;
        text-align: center;
        height: 8vh;
        width: 10vw;
        margin: 0.5vh;
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
        margin: 0vh 5% 10vh 5%;
        padding: 5%;
        text-align: center;

    }


#quest-box{
        color: rgb(54, 54, 54);
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        border-radius: 30px;
        margin: 0px 40vw;
        max-height: 100px;
}
</style>