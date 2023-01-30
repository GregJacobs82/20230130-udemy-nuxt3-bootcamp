<template>
    <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
        <CarDetailHero
            :img-url="car.url"
            :name="car.name"
            :seats="car.seats"
            :miles="car.miles"
            :price="car.price"
        />
        <div v-if="car.features.length" class="mr-10 mt-5 border-b pb-5">
            <CarDetailAttributes
                v-for="(feature, index) in car.features"
                :key="index"
                :feature="feature"
            />
        </div>
        <CarDetailDescription :description="car.description" />
        <CarDetailContact />
    </div>
</template>
<script setup>
    const route = useRoute();
    const { toTitleCase } = useUtilities();
    const { cars } = useCars();

    useHead({
        title: toTitleCase(route.params.name),
    });

    const car = computed(() => {
        return cars.find(c => {
            return c.id === parseInt(route.params.id);
        });
    });
</script>
