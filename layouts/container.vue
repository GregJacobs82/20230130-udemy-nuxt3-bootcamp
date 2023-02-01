<template>
    <div class="container mx-auto">
        <div class="mt-24">
            <h1 v-if="title" class="text-3xl">{{ title }}</h1>
        </div>
        <slot />
    </div>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
            default: undefined,
        },
    });
</script>
