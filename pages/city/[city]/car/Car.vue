<template>
    <div>
        <div><h1>Car Page</h1></div>
        <CarSidebar />
        <NuxtPage />
    </div>
</template>

<script setup>
    const route = useRoute();
    useHead({
        title: `Cars in ${route.params.city}`,
    });
</script>
