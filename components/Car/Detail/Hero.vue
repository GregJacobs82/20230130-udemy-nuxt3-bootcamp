<template>
    <div class="mt-5">
        <img
            :src="imgUrl"
            class="w-full"
            alt=""
        />
        <h1 class="mt-10 text-4xl">{{ name }}</h1>
        <div
            class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between"
        >
            <div class="flex">
                <p class="mr-2">{{ seats }} seats</p>
                <p class="mr-2">|</p>
                <p class="mr-2">{{ miles }} miles</p>
            </div>
            <div>
                <p class="font-bold text-2xl">${{ price }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        imgUrl: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        miles: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        seats: {
            type: Number,
            required: true,
        },
    });
</script>
