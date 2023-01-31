<template>
    <!-- NAVBAR -->
    <header class="absolute w-full top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
        <NuxtLink to="/" class="text-3xl font-mono">cartrader</NuxtLink>
        <div class="d-inline-flex items-center">
            <small class="mr-2 opacity-50">Nearby</small>
            <NuxtLink to="/city/charleston/car" class="mr-3">Charleston, SC</NuxtLink>
        </div>
    </header>
</template>
