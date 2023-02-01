import cars from '@/data/cars.json';

export default defineEventHandler((event) => {
    const { city } = event.context.params;

    return cars.filter((car) => {
        return car.city?.toLowerCase() === city.toLowerCase();
    });
});
