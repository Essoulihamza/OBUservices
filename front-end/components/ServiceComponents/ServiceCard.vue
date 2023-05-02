<script setup>
const { category } = useRoute().params;
const props = defineProps(['data']);
const service = props.data;

</script>


<template>
    <nuxt-link :to="'/Categories/' + category + '/' + service.id">
        <div class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md none:bg-gray-800">
            <div class="mt-2">
                <a href="#" class="text-xl font-bold text-gray-700 none:text-white hover:text-gray-600 none:hover:text-gray-200 hover:underline" tabindex="0" role="link">{{ service.name }}</a>
                <p class="mt-2 text-gray-600 none:text-gray-300">{{ service.description }}</p>
            </div>

            <div class="flex items-center justify-end mt-4">
                <a href="#" class="text-blue-600 none:text-blue-400 hover:underline" tabindex="0" role="link">Explore</a>
            </div>
        </div>
    </nuxt-link>
</template>