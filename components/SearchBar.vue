<template>
    <div class="font-serif w-100 text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input
            v-model="city"
            type="text"
            placeholder="Search by city..."
            class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
            @keypress.enter="handleSearch"
        />
        <Btn
            class="bg-sky-500 px-10 rounded-l-none"
            @click="handleSearch"
        >
            Search
        </Btn>
    </div>
</template>
<script setup>
    const city = ref('');

    const handleSearch = () => {
        if (city.value) {
            navigateTo(`/city/${city.value}/car`);
        }
    }
</script>
