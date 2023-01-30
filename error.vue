<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h1 class="text-9xl">{{ error.statusCode }}</h1>
        <p class="mt-7 text-4xl">{{ error.message }}</p>
        <button
            class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white"
            @click="navigateBack"
        >
            Go Back
        </button>
    </div>
</template>
<script setup>
    const error = useError();
    const router = useRouter();

    const navigateBack = () => {
        // CLEARERROR is necessary here so that the Custom "throw createError" error does not persist
        clearError({
            redirect: router.back(),
        });
    }
</script>
