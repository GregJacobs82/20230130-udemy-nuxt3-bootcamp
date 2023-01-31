<template>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">

        <!-- SEARCH LOCATION -->
        <div class="p-5 flex justify-between relative border-b">
            <h3>Location</h3>
            <h3
                class="text-blue-400 capitalize cursor-pointer"
                @click="togglePopup"
            >
                {{ city }}
            </h3>

            <!-- CHANGE CITY LOCATION -->
            <div
                class="absolute border shadow-lg left-56 top-1 m-1 bg-white"
                :class="{ 'hidden':hidePopup }"
                style="z-index:100;"
            >
                <!-- HEADER -->
                <div class="flex items-center justify-between border-b w-100">
                    <div class="text-gray-500 p-2">Change Location</div>
                    <button
                        class="py-1 px-3 rounded-lg font-bold"
                        @click="togglePopup"
                    >
                        X
                    </button>
                </div>
                <!-- CONTENT -->
                <div class="p-5">
                    <input type="text" class="border p-1 rounded" placeholder="City..." />
                    <button class="bg-blue-400 w-full mt-2 rounded text-white p-1">
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
    const hidePopup = ref(true);

    const togglePopup = () => {
        hidePopup.value = !hidePopup.value
    }

    const props = defineProps({
        city: {
            type: String,
            default: 'Toronto',
        },
    });
</script>
