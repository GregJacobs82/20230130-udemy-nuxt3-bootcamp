<template>
    <NuxtLayout name="hero">
        <!-- HERO -->
        <div class="relative h-screen w-100">
            <!-- BACKGROUND IMAGE -->
            <NuxtImg
                class="absolute inset-0 object-cover bg-cover bg-bottom h-full w-full min-h-full min-w-full"
                src="/car-ferrari-portofino-m_splash.jpg"
            />

            <!-- OVERLAY -->
            <div class="absolute w-full h-full bg-black opacity-70"></div>

            <!-- CONTENT -->
            <div class="absolute w-full h-full flex justify-center items-center p-8">
                <div class="text-center w-100 xl:w-2/3 max-w-[800px]">
                    <h1 class="text-6xl md:text-7xl lg:text-8xl font-serif mb-10 text-white">Find your drive</h1>
                    <SearchBar />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    useHead({
        title: 'Car Trader 1.0 - by Greg Jacobs',
    });
</script>

<style scoped>
    .bg-image {
        position:absolute;
        inset:0;
        object-fit: cover;
        background-size: cover;
        background-position: center bottom;
        min-height: 100%;
        min-width: 100%;
    }
</style>
