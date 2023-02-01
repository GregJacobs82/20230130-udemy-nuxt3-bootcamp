<template>
    <NuxtLayout name="container" title="Create a New Listing">
        <div class="bg-blue-100 shadow-md rounded p-3 mt-5 flex flex-wrap justify-between">
            <FormSelect
                title="Make *"
                :options="makes"
                name="make"
                @change-input="onChangeInput"
            />
            <FormInput
                v-for="input in inputs"
                :key="input.id"
                :title="input.title"
                :name="input.name"
                :placeholder="input.placeholder"
                @change-input="onChangeInput"
            />
            <FormTextarea
                title="Description *"
                name="description"
                placeholder=""
                @change-input="onChangeInput"
            />
            <FormImage @change-input="onChangeInput" />
        </div>
    </NuxtLayout>
</template>

<script setup>
    const { makes } = useCars();

    const info = useState('adInfo', () => {
        return {
            make: '',
            model: '',
            year: '',
            miles: '',
            price: '',
            city: '',
            seats: '',
            features: '',
            description: '',
            image: null,
        };
    });

    const onChangeInput = (data, name) => {
        info.value[name] = data;
    };

    const inputs = [
        {
            id: 1,
            title: 'Model *',
            name: 'model',
            placeholder: 'Civic',
        },
        {
            id: 2,
            title: 'Year *',
            name: 'year',
            placeholder: '2023',
        },
        {
            id: 3,
            title: 'Miles *',
            name: 'miles',
            placeholder: '10000',
        },
        {
            id: 4,
            title: 'City *',
            name: 'city',
            placeholder: 'Charleston',
        },
        {
            id: 5,
            title: 'Number of Seats *',
            name: 'seats',
            placeholder: '5',
        },
        {
            id: 6,
            title: 'Features *',
            name: 'features',
            placeholder: 'Leather Interior, No Accidents',
        },
    ];
</script>
