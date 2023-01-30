<template>
    <div class="container mx-auto">
        <div class="mt-32 flex">
            <!-- CARS SIDEBAR -->
            <div class="shadow border w-64 mr-10 z-30 h-[190px]">

                <!-- SEARCH LOCATION -->
                <div class="p-5 flex justify-between relative cursor-pointer border-b">
                    <h3>Location</h3>
                    <h3 class="text-blue-400 capitalize">Toronto</h3>

                    <!-- CHANGE CITY LOCATION -->
                    <div class="hidden absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
                        <input type="text" class="border p-1 rounded" />
                        <button class="bg-blue-400 w-full mt-2 rounded text-white p-1">
                            Apply
                        </button>
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

            <!-- CARS INDEX -->
            <div class="w-full">
                <CarCard />
            </div>
        </div>
    </div>
</template>
