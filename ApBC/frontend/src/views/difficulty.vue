<template>
    <div class="difficulty">
        <router-link to="/Home"><img alt="ApBC" src="../assets/apbcb.png" class="button"/></router-link>
        <difficultyPage></difficultyPage>
    </div>
</template>

<script>
    import difficultyPage from "@/components/difficultyPage.vue";

    export default {
        name: "difficulty",
        components: {
            difficultyPage
        }
    }
</script>

<style scoped>

    .button:hover {
        transform: scale(0.9, 0.9);
        -webkit-transform: scale(0.9,0.9);
        -moz-transform: scale(0.9, 0.9);
    }

</style>