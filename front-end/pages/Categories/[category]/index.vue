<script setup>
import { CubeShadow } from 'vue-loading-spinner';
const { category }  = useRoute().params;
const { $categoryStore } = useNuxtApp();
const categoryData = ref({}); 
const getData = async () => {
    categoryData.value = await $categoryStore.show(category);
    if(Object.keys(categoryData.value).length == 0) {
        throw createError({ statusCode: 404, statusMessage: "Category not found" });
    }
}
onMounted(async () => {
    await getData();
});
</script>

<template>
    <NuxtLayout>
        <div v-if="Object.keys(categoryData).length === 0" class="grid place-content-center h-[60vh]">
                <CubeShadow size="120px" background="#6366f1"></CubeShadow>
        </div>
        <div v-else>
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl mt-10">{{ categoryData.name }}</h1>

            <p class="mt-4 text-center text-gray-500">{{ categoryData.description }}</p>
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 px-4 md:px-28 xl:px-32 pb-8 min-h-[54.3vh]">
                <ServiceCard v-for="service in categoryData.services" 
                         :key="service.id"
                         :data="service"
                        />
            </div>
        </div>
    </NuxtLayout>
</template>