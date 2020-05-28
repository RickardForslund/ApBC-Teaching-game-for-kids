<template>
    <div class="big">
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

<style lang="scss">
    .big{
        margin: -8px 0 0 -8px;
    }
</style>