<template>
    <div class="container mx-auto">
        <div class="mt-32 flex">
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
</template>

<script setup>
    const { cars } = useCars();
    const route = useRoute();

    useHead({
        title: `Cars Index of ${cars.length}`,
    });
</script>
