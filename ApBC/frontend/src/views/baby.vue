<template>
    <div class="baby">
        <!-- header stuff here -->
        <babyplay
                imageUrl = "valp2.jpg"
                logoUrl = "apbcb.png"
        />

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