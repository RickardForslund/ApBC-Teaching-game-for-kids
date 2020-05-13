<template>
  <div class="spel">
<!-- header stuff here -->
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