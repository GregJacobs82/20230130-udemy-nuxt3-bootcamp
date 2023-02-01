<template>
    <NuxtLayout name="container">
        <div class="flex justify-between mt-24 items-center">
            <h1 class="text-3xl">My Listings</h1>
            <Btn class="w-9 h-9 rounded-full flex justify-center items-center p-0">
                <NuxtLink to="/profile/listings/create" class="pt-1 h-full w-full rounded-full inline-flex justify-center align-center font-bold">+</NuxtLink>
            </Btn>
        </div>
        <div class="shadow rounded p-3 mt-5">
            <ListingCard
                v-for="listing in listings"
                :key="listing.id"
                :url="listing.url"
                :name="listing.name"
                :price="listing.price"
                :id="listing.id"
            />
        </div>
    </NuxtLayout>
</template>

<script setup>
    const { listings } = useCars();
</script>
