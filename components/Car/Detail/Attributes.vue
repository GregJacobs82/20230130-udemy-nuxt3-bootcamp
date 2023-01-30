<template>
    <div class="flex text-lg mt-2">
        <p class="rounded text-lime-800 mr-3">✔</p>
        <p>{{ feature }}</p>
    </div>
</template>
<script setup>
    const props = defineProps({
        feature: {
            type: String,
            required: true,
        },
    });
</script>
