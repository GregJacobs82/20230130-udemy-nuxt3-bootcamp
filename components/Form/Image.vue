<template>
    <div class="col-md-5 offset-md-1 mt-2 w-[100%]">
        <label for="" class="text-cyan-500 mb-1 text-sm">
            Image *
        </label>
        <form class="mt-2">
            <div class="form-group">
                <div class="relative bg-white p-3 rounded border">
                    <input
                        type="file"
                        accept="image/*"
                        class="opacity-0 absolute inset-0 cursor-pointer"
                        @change="onImageUpload"
                    />
                    <div class="cursor-pointer h-full opacity-50">Upload Image</div>
                </div>
                <div v-if="image.preview" class="mt-3 w-56">
                    <label for="" class="text-cyan-500 mb-1 text-sm">
                        Preview
                    </label>
                    <div class="w-56 border bg-white p-2">
                        <img :src="image.preview" alt="Image Preview" class="img-fluid" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    const image = useState('carImage', () => {
        return {
            preview: null,
            image: null,
        };
    });

    const emits = defineEmits(['changeInput']);

    const onImageUpload = (event) => {
        const input = event.target;
        if (input.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                image.value.preview = e.target.result;
            };
            image.value.image = input.files[0];
            reader.readAsDataURL(input.files[0]);
            emits('changeInput', input.files[0], 'image');
        }
    };
</script>
