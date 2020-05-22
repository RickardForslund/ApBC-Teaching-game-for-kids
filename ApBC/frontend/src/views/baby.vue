<template>
    <div class="baby">
        <router-link to="/Home"><img alt="ApBC" src="../assets/apbcb.png" class="button"/></router-link>
        <babyplay></babyplay>
    </div>
</template>

<script>
    // @ is an alias to /src
    import babyplay from "@/components/babyplay.vue";

    export default {
        name: "baby",
        components: {
            babyplay
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