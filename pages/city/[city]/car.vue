<template>
    <div v-if="cars && cars.length" class="container mx-auto">
        <NuxtErrorBoundary>
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
                        :favored="car.id in favorite"
                        @favor="toggleFavorite"
                    />
                </div>
            </div>

            <!-- ERROR -->
            <template #error="{error}">
                <div class="text-center mx-auto flex flex-col h-screen justify-center">
                    <h1 class="text-3xl mb-3">Sorry, something went wrong.</h1>
                    <code class="text-red-700">{{error}}</code>
                    <div class="mt-3">
                        <button
                            class="inline-flex rounded-3xl bg-gray-300 px-5 py-1 text-white cursor-pointer"
                            @click="error.value = null"
                        >
                            &larr; Go back
                        </button>
                    </div>
                </div>
            </template>
        </NuxtErrorBoundary>
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

    const favorite = useLocalStorage('favorite', {});

    const toggleFavorite = (id) => {
        if (id in favorite.value) {
            delete favorite.value[id];
        }
        else {
            favorite.value = {
                ...favorite.value,
                [id]: true,
            }
        }
    }
</script>
