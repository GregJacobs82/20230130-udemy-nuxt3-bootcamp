<template>
    <div v-if="cars && cars.length" class="container mx-auto">
        <div class="mt-20 flex">
            <div>
                <h1 class="text-2xl mb-3">Filters</h1>
                <CarSidebar />
            </div>

            <!-- CARS INDEX -->
            <div class="w-full">
                <h1 class="text-2xl mb-3">({{ cars?.length }}) Cars</h1>
                <CarCard
                    v-for="car in cars"
                    :key="car.id"
                    :car="car"
                />
            </div>
        </div>
    </div>
    <div v-else>
        Loading cars...
    </div>
</template>

<script setup>
    const { cars } = useCars();
    const route = useRoute();

    useHead({
        title: `${cars.length} cars in ${route.params.city.toUpperCase()} - Car Trader 1.0 by Greg Jacobs`,
    });
</script>
