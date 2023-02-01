<template>
    <div class="bg-blue-50 border shadow-md rounded overflow-hidden flex justify-between mb-4">
        <div class="flex">
            <NuxtImg :src="url" alt="" class="w-80 mr-3 h-44" sizes="sm:150px md:300px lg:400px" />
            <div class="p-3">
                <h1 class="text-2xl">{{ name }}</h1>
                <p class="text-blue-400">${{ price }}</p>
            </div>
        </div>
        <div class="p-3 flex">
            <NuxtLink
                class="text-blue-400 mr-4"
                :to="`/profile/listings/view/${id}`"
            >
                View
            </NuxtLink>
            <p class="text-red-400 cursor-pointer">Delete</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        url: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
    });
</script>

