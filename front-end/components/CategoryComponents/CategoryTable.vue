<script setup>
const { $categoryStore } = useNuxtApp();
const categories = ref([]);
onMounted( async () => {
    categories.value = await $categoryStore.index(); 
});
async function setData(){
    categories.value = await $categoryStore.index(); 
}
</script>

<template>
    <section class="w-full min-h-[80vh]">
    <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 none:border-gray-700 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 none:divide-gray-700">
                        <thead class="bg-gray-50 none:bg-gray-800">
                            <tr>
                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 none:text-gray-400">
                                    <div class="flex items-center gap-x-3">
                                        <span>Category name</span>
                                    </div>
                                </th>

                                <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 none:text-gray-400">
                                    <button class="flex items-center gap-x-2">
                                        <span>Description</span>
                                    </button>
                                </th>
                                <th scope="col" class="relative py-3.5 px-4">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 none:divide-gray-700 none:bg-gray-900">
                            <CategoryRow v-for="category in categories"
                                         :key="category.id"
                                         :data="category"
                                         @update="setData" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
</template>