<template>
    <!-- HERO -->
    <div class="
            relative
            h-screen
            w-100
            bg-no-repeat
            bg-cover
            bg-bottom
            bg-[url('https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg')]
        ">
        <!-- CONTENT -->
        <div class="z-10 absolute w-full h-full flex justify-center items-center p-8">
            <div class="text-center w-100 xl:w-1/2">
                <h1 class="text-8xl font-serif mb-10 text-white">Find your drive</h1>

                <!-- SEARCH BAR -->
                <div class="font-serif w-100 text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search by city..."
                        class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
                    />
                    <button class="bg-sky-500 px-10 text-white">Search</button>
                </div>
            </div>
        </div>

        <!-- OVERLAY -->
        <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
    </div>
</template>
