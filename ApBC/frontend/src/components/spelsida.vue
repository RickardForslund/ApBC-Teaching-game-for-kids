<template>
  <div class="start">

          <div class="game-screen">
            <div class="settingsPanel" id="settingsPanel"  @mouseover="openNav();" @mouseleave="closeNav();">
              <img id="settings" :src="require('@/assets/stuff/' + settings_url)" />
              <img id="music_logo" :src="require('@/assets/stuff/' + music_url)" @click="muteSound();" />
            </div>

            <div class="questionText">
              <h1>{{question123}}</h1>
            </div>
               
            <section id="section">
              <div class="quest1">

                
                <div class="animalid">

                  <img id="animal_image" :src="require('@/assets/animals/' + url)" />

                </div>
                <!--<h4>what kind of animal is this?</h4>-->
              </div>
            </section>
          
            <div id="buttons" class="buttons">
              <div id="1" @click="validate(1);" class="button1">{{bt1}}</div>
              <div id="2" @click="validate(2);" class="button2">{{bt2}}</div>
              <!--<div class="button3">b3</div>
              <div class="button4">b4</div>-->
            </div>
          </div>
  </div>
</template>
<!--
<script src="../store/fetch-apbc.js"></script>
-->

<script>

export default {
  name: "spelsida",
  props: {
    imageUrl: String,
    logoUrl: String
  },
  data: function () {
    return {
      question123: 'Vad heter djuret?',
      url: 'Anka.png',
      settings_url: 'settings.png',
      music_url: 'music.png',
      animalName: '',
      otherAnimalName: '',
      currentID: null,
      otherAnswerID: null,
      bt1: '',
      bt2: '',
      musicMuted: false,
      lastID: null,
      otherlastID: null
    }
  },

  created() {
    document.body.style.overflowX = "hidden";
  },
  mounted() {
    
    this.currentID = 1;
    this.animalName = 'Anka';
    this.bt1 = 'Anka';
    this.bt2 = 'Fisk';
    
  },

  methods: {
    btn1: function testing() {
      console.log("in btn1 function");
    },
    btn2: function testing() {
      console.log("in btn2 function");
    },

    generateNumber: function () {
      console.log("Generating IDs")
      this.currentID = Math.floor((Math.random() * 10) + 1);
      this.otherAnswerID = Math.floor((Math.random() * 10) + 1);
      console.log("Current ID generated is: " + this.currentID);
      console.log("Other ID generated is: " + this.otherAnswerID);
    },

    getNewRandomNumber: function () {
      this.lastID = this.currentID;
      this.otherlastID = this.otherAnswerID;
      console.log("Last correct answer is: " + this.lastID);
      console.log("Last other answer is: " + this.otherlastID);

      do {
        this.generateNumber();
      } while (
      this.currentID == this.otherAnswerID || 
      this.currentID == this.lastID || 
      this.otherAnswerID == this.otherlastID||
      this.otherAnswerID == this.lastID||
      this.currentID == this.otherlastID);
    },

    getNewobject: function () {
      console.log("inside getImageUrl");

      fetch('http://127.0.0.1:3000/api/apbc/' + this.otherAnswerID)
              .then((resp) => resp.json())
              .then((data) => {
                this.otherAnimalName = data.apbc.name;
                console.log("other animal name is: " + this.otherAnimalName)
              });

      fetch('http://127.0.0.1:3000/api/apbc/' + this.currentID)
              .then((resp) => resp.json())
              .then((data) => {
                this.url = data.apbc.image;
                this.animalName = data.apbc.name;

              // random correct answer
                let randomNumber = Math.floor(Math.random() * 2 + 1);
                if (randomNumber == 1) {
                  this.bt1 = this.animalName;
                  this.bt2 = this.otherAnimalName;
                } else {
                  this.bt2 = this.animalName;
                  this.bt1 = this.otherAnimalName;
                }


              });
    },

    greeting: function () {
      console.log("grattis");


    if (this.musicMuted == false) {
          const sound = ( new Audio( require('@/assets/sounds/cheer2.mp3')));
    sound.play();
    }


    this.url = 'grattis.gif'
     this.question123 = 'Grattis!'   
     this.bt1 = ''
     this.bt2 = ''
     document.getElementById("buttons").style.opacity = 0;


    },

    validate: function (nr) {
      if (nr == 1 & this.animalName == this.bt1) {
        //COMMENTED OUT FOR TESTING PURPOSES. Replace below code with commented out code for proper build
        this.resetSettings();
        this.getNewRandomNumber();
        this.getNewobject();
        /*
        this.greeting();
        setTimeout(() => {
          this.resetSettings();
          this.getNewRandomNumber();
          this.getNewobject();

        }, 5000);

         */

      } else if (nr == 2 & this.animalName == this.bt2) {
        //COMMENTED OUT FOR TESTING PURPOSES. Replace below code with commented out code for proper build
        this.resetSettings();
        this.getNewRandomNumber();
        this.getNewobject();
        /*
        this.greeting();
        setTimeout(() => {
          this.resetSettings();
          this.getNewRandomNumber();
          this.getNewobject();

        }, 5000);

         */
      } else {
        console.log("wrong answer, try again!");
        document.getElementById(nr).style.backgroundColor = "red";
        
      }
    },
    resetSettings: function () {
      this.question123 = 'Vad heter djuret?'
      document.getElementById("buttons").style.transition = "0.5s ease-in-out 0s";



      document.getElementById('1').style.backgroundColor = "darkgreen";
      document.getElementById('2').style.backgroundColor = "darkgreen";
      document.getElementById("buttons").style.opacity = 1;
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




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');

section{
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:"menu" "questions" "buttons";
  grid-gap: 10px;

}

.start{
  background-color: white;
  color: white;
  padding: 5px;
  font-size: 20px;
}

  .game-screen{

    background-color: rgba(255, 255, 255, 0.8);
    font-family: 'Patua One';
    background-image: url("../assets/background.jpg");
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;

    min-height: 700px;


    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-template-areas:"questions" "buttons";
    grid-gap: 10px;

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

section{

  margin-top: 0%;
  color: rgb(54, 54, 54);
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  border-radius: 30px;
  margin-left: 10%;
  margin-right: 10%;
  padding: 5% 5% 2%;

}

section img{
  border-radius: 0px;
  width: 60%;
}

.questionText h1{
  color: darkgreen;
  margin: 20px 0px 10px;
}
section{
  margin-left: 20%;
  margin-right: 20%;
}


  .button1,.button2,.button3,.button4{
    background-color: rgba(0, 100,0, 0.9);
  border-radius: 15px;
  text-align: center;
  height: 100px;
  margin: 10px;
    font-size: 50px;
    font-family: 'Patua One';
    line-height: 100px;
    color: white;
  }

    .button1:hover,.button2:hover,.button3:hover,.button4:hover{
      background-color: #003e0d;
      cursor: pointer;
    }

</style>
