<template>
    <div class="big">
        <router-link to="/Home"><img alt="ApBC" src="../assets/apbcb.png" class="button"/></router-link>
        <bigplay></bigplay>
    </div>
</template>

<script>
    import Bigplay from "../components/bigplay";
    export default {
        name: "big",
        components: {Bigplay}
    }
</script>

<style scoped>

</style>