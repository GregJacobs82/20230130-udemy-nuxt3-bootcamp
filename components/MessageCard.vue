<template>
    <div class="even:bg-blue-100 odd:bg-gray-50 p-4">
        <h1 class="font-fold text-2xl">{{ name }}</h1>
        <p class="text-gray-700">
            {{ description }}
        </p>
        <div class="flex items-center mt-4">
            <a
                :href="`mailto:${email}`"
                :title="`Send an email to ${email}`"
                class="text-green-700 mr-10"
            >
                <span class="grayscale">✉</span> ️{{ email }}
            </a>
            <a
                :href="`tel:${phone}`"
                :title="`Call ${name} at ️${phone}`"
                class="text-blue-500"
            >
                <span class="grayscale opacity-30">☎</span>️ {{ phone }}
            </a>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        name: {
            type: String,
            default: 'Laith Harb',
        },
        description: {
            type: String,
            default: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam repellendus at, similique illum dolor numquam ex tempora deleniti tempore reprehenderit.',
        },
        email: {
            type: String,
            default: 'laith@email.com',
        },
        phone: {
            type: String,
            default: '555-555-5555',
        },
    });
</script>
