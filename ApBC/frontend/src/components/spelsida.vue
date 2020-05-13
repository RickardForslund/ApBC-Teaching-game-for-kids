<template>
  <div class="start">
    <menu>
      <ul id="head-menu" class="nav">
        <!--<li id="home" class="home"><img alt="Home" src="../assets/home.png" /></li>-->
      <li id="logo" class="logo">
        <img alt="ApBC" :src="require('@/assets/' + logoUrl )" />
        </li>
      <!--<li id="sound" class="sound"><img alt="Music" src="../assets/music.png" /></li>-->
      </ul>
    </menu>

      <div class="gameScreen">
          <div class="box-wrapper">

            <questions>
              <div class="quest1">
                <h1>{{question}}</h1>
                <div class="animalid">
                  <img id="imgUrl" alt="ApBC" :src="require('@/assets/' + imageUrl )" />

                <!-- 
                  ../assets/valp.jpg -->

                </div>
                <!--<h4>what kind of animal is this?</h4>-->
              </div>
            </questions>
          
            <buttons>
              <div class="button1">HUND</div>
              <div class="button2">KATT</div>
              <!--<div class="button3">b3</div>
              <div class="button4">b4</div>-->
            </buttons>

          </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "spelsida",
  props: {
        imageUrl: String,
        logoUrl: String
    },
    data: function() {
    return {
      question: 'Vad heter djuret?'
    }
  }
};


//--------------------------------------//

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('imgUrl');
const url = 'http://127.0.0.1:3000/api/questions/';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let questions = data.questions;
        return questions.map(function(questions) {
            let li = createNode('li');
            li.innerHTML = "animal=" + questions.animal + "<br>sound=" + questions.sound + "<br>image=" + questions.image + "<br><br>";
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });


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

menu{
  margin-bottom: 0px;
  padding-left: 0px;
}

.nav{
  padding-left: 0px;
}

.gameScreen {
  background-color: rgba(255, 255, 255, 0.8);
  font-family: 'Patua One';
  background-image: url("https://i.pinimg.com/originals/17/c1/45/17c1456cc20762a21966dd584498e7e5.jpg");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

}

.box-wrapper{

  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-template-areas:"questions" "buttons";
  grid-gap: 10px;

}


questions{

  margin-top: 10%;
  color: rgb(54, 54, 54);
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  border-radius: 30px;
  margin-left: 10%;
  margin-right: 10%;
  padding: 0px 5% 2%;

}

questions img{
  border-radius: 30px;
  width: 60%;
}

questions h1{
  color: darkgreen;
  margin: 20px 0px 10px;
}
buttons{
  margin-left: 20%;
  margin-right: 20%;
}


  .button1,.button2,.button3,.button4{
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

    .button1:hover,.button2:hover,.button3:hover,.button4:hover{
      background-color: #003e0d;
    }


</style>
