<script setup>
import { storeToRefs } from 'pinia';
import { CubeShadow } from 'vue-loading-spinner';

const { $categoryStore } = useNuxtApp();
const { index } = $categoryStore;
const { categories } = storeToRefs($categoryStore);
onMounted( async () => {
     await index();
});
</script>


<template>
    <NuxtLayout>
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl mt-10">Categories</h1>
            <div v-if="categories.length == 0" class="grid place-content-center h-[60vh]">
                <CubeShadow size="120px" background="#6366f1"></CubeShadow>
            </div>
        <div v-else class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12  md:grid-cols-2 xl:grid-cols-3 px-4 md:px-28 xl:px-32 pb-8 min-h-[54.2vh]">
            <Category  v-for="category in categories" 
                      :key="category.id"
                      :category="category"
            />
        </div>
    </NuxtLayout>
</template>