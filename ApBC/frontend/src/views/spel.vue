<template>
  <div class="spel">
      <router-link to="/Home"><img alt="ApBC" src="../assets/apbcb.png" class="button"/></router-link>
      <spelsida></spelsida>
  </div>
</template>

<script>
// @ is an alias to /src
import spelsida from "@/components/spelsida.vue";

export default {
  name: "spel",
  components: {
    spelsida
  }
};
</script>

<style scoped>

    .button:hover {
        transform: scale(0.9, 0.9);
        -webkit-transform: scale(0.9,0.9);
        -moz-transform: scale(0.9, 0.9);
    }

</style>