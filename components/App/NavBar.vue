<template>
    <!-- NAVBAR -->
    <header class="absolute w-full top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
        <NuxtLink to="/" class="text-3xl font-mono">cartrader</NuxtLink>
        <div class="d-inline-flex items-center">
            <NuxtLink to="/profile" class="p-4 mr-2">Profile</NuxtLink>
            <NuxtLink to="/profile/listings" class="p-4">Listings</NuxtLink>
        </div>
    </header>
</template>
