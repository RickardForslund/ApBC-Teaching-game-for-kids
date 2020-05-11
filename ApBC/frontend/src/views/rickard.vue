<template>
  <div class="rickard">
<!-- header stuff here -->
    <rickardo></rickardo>
  </div>
</template>

<script>
// @ is an alias to /src
import rickardo from "@/components/rickardo.vue";

export default {
  name: "rickard",
  components: {
    rickardo
  }
};
</script>