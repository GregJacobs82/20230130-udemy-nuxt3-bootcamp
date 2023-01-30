<template>
    <div class="flex mt-50">
        <CarSidebar />
        <CarCard />
    </div>
</template>
<script setup>
    const route = useRoute();
    const { toTitleCase } = useUtilities();

    useHead({
        title: `Cars in ${toTitleCase(route.params.city)}`,
    });
</script>
