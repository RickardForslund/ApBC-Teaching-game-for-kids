<template>
  <div class="home">
    <img alt="ApBC" src="../assets/apbc.png" />
    <Intro msg="Hej på dig, min lille vän!" />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";

export default {
  name: "Home",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Intro
  }
};
</script>
