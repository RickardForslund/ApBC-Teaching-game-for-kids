<template>
    <div class="start">
        <menu>
            <ul id="head-menu" class="nav">

                <li id="logo" class="logo">
                    <img alt="ApBC" :src="require('@/assets/' + logoUrl)" />
                </li>

            </ul>
        </menu>
    </div>
</template>

<script>
    export default {
        name: "babyplay",
        props: {
            imageUrl: String,
            logoUrl: String
        },
    }
</script>

<style scoped>

</style>