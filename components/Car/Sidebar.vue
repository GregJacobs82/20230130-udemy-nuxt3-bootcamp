<template>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">

        <!-- SEARCH LOCATION -->
        <div class="p-5 flex justify-between relative border-b">
            <h3>Location</h3>
            <h3
                class="text-blue-400 capitalize cursor-pointer"
                @click="toggleModal('location')"
            >
                {{ currentCity }}
            </h3>

            <!-- CHANGE CITY LOCATION -->
            <div
                v-if="modal.location"
                class="absolute border shadow-lg left-56 top-1 m-1 bg-white"
                style="z-index:100;"
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
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Make</h3>
            <h3 class="text-blue-400 capitalize">Toyota</h3>
        </div>

        <!-- SEARCH CAR PRICE -->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Price</h3>
            <h3 class="text-blue-400 capitalize">Any</h3>
        </div>
    </div>
</template>
<script setup>
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


</script>
