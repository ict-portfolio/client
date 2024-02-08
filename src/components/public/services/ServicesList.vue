<template>
        <div class="flex flex-wrap gap-1 p-1 sm:gap-4 sm:p-3" :class="services.length >= 4 ? 'justify-center' : 'justify-normal'">
            <ServiceCard data-aos="fade-up" :data-aos-delay="index * 100" :service="service"  v-for="service , index in services" :key="service.id" />
        </div>
</template>

<script>
import ServiceCard from './ServiceCard.vue';
export default {
    props: {
        services: {
            type: Array,
            required: true
        }
    },
    components: { ServiceCard }
}
</script>

<style scoped>

</style>