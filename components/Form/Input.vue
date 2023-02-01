<template>
    <div class="flex flex-col w-[48%] mt-2">
        <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
        <input
            v-model="state"
            :name="name"
            :placeholder="placeholder"
            :title="name"
            type="text"
            class="p-2 border w-100 rounded"
            @input="onChange"
        />
    </div>
</template>

<script setup>
    defineProps({ //todo: notice you removed "const props ="
        title: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
    });

    const emits = defineEmits(['changeInput']);
    const state = ref('');
    const onChange = () => {
        emits('changeInput', state.value, name); //todo: notice you removed "props.name", which may require "name.value"??
    };
</script>
