<template>
  <div class="about">
    <router-link to="/Home"><img alt="ApBC" src="../assets/apbcb.png" class="button"/></router-link>
    <aboutus></aboutus>
  </div>
</template>

<script>
  // @ is an alias to /src
  import aboutus from "@/components/aboutus.vue";

  export default {
    name: "about",
    components: {
      aboutus
    }
  };
</script>

<style scoped>

  .about {
    width:  100vw;
    height: 100vh;
  }

  .button:hover {
    transform: scale(0.9, 0.9);
    -webkit-transform: scale(0.9,0.9);
    -moz-transform: scale(0.9, 0.9);
  }

</style>