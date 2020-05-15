<template>
    <div class="difficulty">
        <img alt="ApBC" src="../assets/apbcb.png" />
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

</style>