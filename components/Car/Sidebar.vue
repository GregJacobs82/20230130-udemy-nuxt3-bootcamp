<template>
    <div class="shadow border w-64 mr-10 z-30 h-[190px] bg-gray-50">

        <!-- SEARCH LOCATION -->
        <div class="p-5 flex justify-between relative border-b">
            <h3>Location</h3>
            <h3
                class="text-blue-400 capitalize cursor-pointer"
                @click="toggleModal('location')"
            >
                {{ currentCity }}
            </h3>

            <!-- MODAL: Change City Location -->
            <div
                v-if="modal.location"
                class="absolute border shadow-lg top-0 m-1 bg-gray-50"
                style="z-index:100;left:100%;"
            >
                <!-- HEADER -->
                <div class="flex items-center justify-between border-b w-100">
                    <div class="text-gray-500 p-2">Change Location</div>
                    <button
                        class="py-1 px-3 rounded-lg font-bold"
                        @click="toggleModal('location')"
                    >
                        X
                    </button>
                </div>
                <!-- CONTENT -->
                <div class="p-5">
                    <input
                        v-model="newCity"
                        type="text"
                        class="border p-1 rounded"
                        placeholder="City..."
                        @keypress.enter="onChangeLocation"
                    />
                    <button
                        class="bg-blue-400 w-full mt-2 rounded text-white p-1"
                        @click="onChangeLocation"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>

        <!-- SEARCH CAR MAKE -->
        <div class="p-5 flex justify-between relative border-b">
            <h3>Make</h3>
            <h3 class="text-blue-400 capitalize cursor-pointer" @click="toggleModal('make')">
                {{ route.params.make || "Any" }}
            </h3>

            <!-- MODAL: Change Car Make -->
            <div
                v-if="modal.make"
                class="absolute border shadow-lg top-0 m-1 bg-white w-[600px] bg-gray-50"
                style="z-index:100;left:100%"
            >
                <!-- HEADER -->
                <div class="flex items-center justify-between border-b w-100">
                    <div class="text-gray-500 p-2">Change Make</div>
                    <div>
                        <button class="bg-blue-400 text-white px-3 py-0 rounded cursor-pointer" @click="onChangeMake('Any')">
                            Clear
                        </button>
                        <button
                            class="py-1 px-3 rounded-lg font-bold"
                            @click="toggleModal('make')"
                        >
                            X
                        </button>
                    </div>
                </div>
                <!-- CONTENT -->
                <div class="p-5 w-100 flex flex-col justify-between flex-wrap max-h-[480px]">
                    <h4
                        v-for="(make, index) in makes"
                        :key="index"
                        class="inline-flex w-1/3"
                    >
                        <span class="hover-text-blue cursor-pointer" @click="onChangeMake(make)">
                            {{ make }}
                        </span>
                    </h4>
                </div>
            </div>
        </div>

        <!-- SEARCH CAR PRICE -->
        <div class="p-5 flex justify-between relative border-b">
            <h3>Price</h3>
            <h3 class="text-blue-400 capitalize cursor-pointer" @click="toggleModal('price')">
                {{ priceRangeText }}
            </h3>

            <!-- MODAL: Change Price -->
            <div
                v-if="modal.price"
                class="absolute border shadow-lg top-0 m-1 bg-gray-50"
                style="z-index:100;left:100%;"
            >
                <!-- HEADER -->
                <div class="flex items-center justify-between border-b w-100">
                    <div class="text-gray-500 p-2">Change Price</div>
                    <button
                        class="py-1 px-3 rounded-lg font-bold"
                        @click="toggleModal('price')"
                    >
                        X
                    </button>
                </div>
                <!-- CONTENT -->
                <div class="p-5">
                    <div class="lex justify-between bg-white border rounded mb-3">
                        <input
                            v-model="priceRange.min"
                            type="number"
                            class="rounded-l p-1 rounded"
                            placeholder="Min"
                            @keypress.enter="onChangePrice"
                        />
                        <button
                            class="bg-red-400 text-white py-1 px-2 rounded-r h-full"
                            title="Clear the Min Price"
                            @click="priceRange.min = undefined"
                        >
                            X
                        </button>
                    </div>
                    <div class="flex justify-between bg-white border rounded mb-3">
                        <input
                            v-model="priceRange.max"
                            type="number"
                            class="rounded-l p-1"
                            placeholder="Max"
                            @keypress.enter="onChangePrice"
                        />
                        <button
                            class="bg-red-400 text-white py-1 px-2 rounded-r h-full"
                            title="Clear the Max Price"
                            @click="priceRange.max = undefined"
                        >
                            X
                        </button>
                    </div>
                    <button
                        class="bg-blue-400 w-full rounded text-white p-1"
                        @click="onChangePrice"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const { makes }= useCars();
    const route = useRoute();
    const router = useRouter();
    const currentCity = route.params.city;
    const newCity = ref('');
    const priceRange = ref({
        min: '',
        max: '',
    });

    const priceRangeText = computed(() => {
        const minPrice = route.query.minPrice;
        const maxPrice = route.query.maxPrice;

        if (!minPrice && !maxPrice) return 'Any';
        else if (!minPrice && maxPrice) return `< $${maxPrice}`;
        else if (minPrice && !maxPrice) return `> $${minPrice}`;
        else return `$${minPrice} - $${maxPrice}`;
    });

    const modal = ref({
        location: false,
        make: false,
        price: false,
    });

    const toggleModal = (key) => {
        modal.value[key] = !modal.value[key];
    };

    const onChangeLocation = () => {
        if (!newCity.value) return;

        // IT SHOULD THROW AN ERROR IF USER INPUTS CITY AS NOT A STRING
        if (!isNaN(parseInt(newCity.value))) {
            throw createError({
                statusCode: 400,
                message: 'Invalid City Format',
            });
        }
        toggleModal('location');
        navigateTo(`/city/${newCity.value}/car/${route.params.make}`);
        newCity.value = '';
    }

    const onChangeMake = (make) => {
        toggleModal('make');
        if (make === 'Any') make = '';
        navigateTo(`/city/${currentCity}/car/${make}`)
    }

    // todo: this is sloppy
    const onChangePrice = () => {
        toggleModal('price');
        if (priceRange.value.max && priceRange.value.min) {
            if (priceRange.value.min > priceRange.value.max) return;
            router.push({
                query: {minPrice: priceRange.value.min, maxPrice: priceRange.value.max,}
            });
        }
        else if (priceRange.value.min) {
            router.push({query: {minPrice: priceRange.value.min}});
        } else if (priceRange.value.max) {
            router.push({query: {maxPrice: priceRange.value.max,}});
        } else {
            navigateTo(`/city/${currentCity}/car/`);
        }
    }
</script>
<style scoped>
    .hover-text-blue:hover { color: dodgerblue; }
</style>
