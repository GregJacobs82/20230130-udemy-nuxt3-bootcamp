<template>
    <div
        v-if="car"
        class="relative shadow border w-full overflow-hidden mb-5 h-[200px]"
    >
        <img
            :src="favored ? heartFilled : heartOutline"
            alt="I love this car!"
            class="absolute w-6 right-2 top-2 z-10 cursor-pointer"
            @click="emit('favor', car.id)"
        />
        <div class="flex h-full">
            <NuxtLink :to="carLink" class="w-[300px] h-full inline-block">
                <NuxtImg
                    class="w-full h-full object-cover"
                    :src="car.url"
                    :alt="car.name"
                    sizes="xs:300px"
                />
            </NuxtLink>
            <div class="p-4 inline-flex flex-col flex-1 overflow-auto">
                <div>
                    <NuxtLink :to="carLink">
                        <h1 class="text-2xl text-blue-700 inline-block">
                            {{ car.name }}
                        </h1>
                    </NuxtLink>
                    <p class="text-gray-700">
                        {{ car.description }}
                    </p>
                </div>
                <!-- PRICE -->
                <h1 class="mt-auto text-xl">
                    ${{ car.price }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script setup>
    import heartFilled from '@/assets/heartFilled.png';
    import heartOutline from '@/assets/heartOutline.png';

    const props = defineProps({
        car: {
            type: Object,
            default: () => {},
        },
        favored: {
            type: Boolean,
            default: false,
        },
    });

    const carLink = computed(() => {
        return `/car/${props.car.name}-${props.car.id}`;
    });

    const emit = defineEmits(['favor']);
</script>
