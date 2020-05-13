<template>
  <div class="spel">
<!-- header stuff here -->
    <spelsida 
    imageUrl = "valp.jpg"
    logoUrl = "apbc.png"
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