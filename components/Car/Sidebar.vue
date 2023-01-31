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

            <!-- MODAL: Change City Location -->
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
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Price</h3>
            <h3 class="text-blue-400 capitalize">Any</h3>
        </div>
    </div>
</template>
<script setup>
    const { makes }= useCars();
    const route = useRoute();
    const currentCity = route.params.city;
    const newCity = ref('');

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
</script>
<style scoped>
    .hover-text-blue:hover { color: dodgerblue; }
</style>
