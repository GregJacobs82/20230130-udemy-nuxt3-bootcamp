<template>
    <div class="flex flex-col w-[48%] mt-2">
        <label for="" class="text-cyan-500 mb-1 text-sm">
            {{ title }}
        </label>
        <select
            v-model="state"
            :title="name"
            name=""
            id=""
            options=""
            class="p-2 border w-100 rounded"
            @change="onChange"
        >
            <option
                v-for="option in options"
                :key="option.id"
                :value="option"
            >
                {{ option }}
            </option>
        </select>
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
        options: {
            type: Array,
            required: true,
        },
    });

    const emits = defineEmits(['changeInput']);
    const state = ref('');
    const onChange = () => {
        emits('changeInput', state.value, name); //todo: notice you removed "props.name", which may require "name.value"??
    };
</script>
