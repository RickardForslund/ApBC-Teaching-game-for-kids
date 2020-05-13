<template>
  <div class="start">
    <div class="menu">
      <ul id="head-menu" class="nav">
        <!--<li id="home" class="home"><img alt="Home" src="../assets/home.png" /></li>-->
      <li id="logo" class="logo">
        <img alt="ApBC" :src="require('@/assets/' + logoUrl )" />
        </li>
      <!--<li id="sound" class="sound"><img alt="Music" src="../assets/music.png" /></li>-->
      </ul>
    </div>
    <div class="container">
      <div class="box">
          <div class="box-wrapper">

            <div class="questions">
              <div class="quest1">
                <h1>{{question}}</h1><br>
                <div class="animalid">
                  <img alt="ApBC" :src="require('@/assets/' + imageUrl )" />

                <!-- 
                  ../assets/valp.jpg -->

                </div>
                <!--<h4>what kind of animal is this?</h4>-->
              </div>
            </div>
          
            <div class="buttons">
              <div class="button1">HUND</div>
              <div class="button2">KATT</div>
              <!--<div class="button3">b3</div>
              <div class="button4">b4</div>-->
            </div>

          </div>


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
      question: 'vilket djur är det?'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.start{
  background-color: white;
  background-size: 100% 100%;
  color: white;
  padding: 5px;
  box-shadow:inset 0 0 10px #000000;
  font-size: 20px;
}
.home{
}
.sound{
  margin-right: auto;
}
 .nav {
   border-bottom: none;
   border-top: none;
   clear: both;
   padding: 0;
}
li{
  margin-bottom: 500px;
  margin-right: auto;
  margin-left: auto;
  display: inline;
  text-align: left;
}
.container{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);

}

.box {
  grid-column: 1 / 6;
  grid-row: 1 / 8;
  background-color: rgba(255, 255, 255, 0.89);
  box-shadow:inset 0 0 10px #000000;
  

  background-image: url("https://i.pinimg.com/originals/17/c1/45/17c1456cc20762a21966dd584498e7e5.jpg");
  background-color: #cccccc; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
}

.box-wrapper{
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);
  
  
}


.questions{
  padding: 20px;
  color: rgb(54, 54, 54);
  background-color: whitesmoke;
  text-align: center;
  border-radius: 30px;
  grid-column: 2 /10;
  grid-row: 2 / 4;
  opacity: 0.8;
}

.question>h1{
  text-align: center;
}
.buttons{
  grid-column: 2 /10;
  grid-row: 7;
}


  .button1,.button2,.button3,.button4{
  background-color: rgb(255, 83, 204);
  border-radius: 15px;
  text-align: center;
  height: 100px;
  margin: 10px;
  opacity: 0.9;
    font-size: 50px;
    font-family: "Sitka Text";
  }

    .button1:hover,.button2:hover,.button3:hover,.button4:hover{
      background-color: rgb(255, 113, 224);
    }


</style>
