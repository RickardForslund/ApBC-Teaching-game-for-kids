<template>
  <div class="spel">
<!-- header stuff here -->
    <spelsida 
    imageUrl = "valp2.jpg"
    logoUrl = "apbcb.png"
    />

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