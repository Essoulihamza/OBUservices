<script setup>
    const { $requestStore } = useNuxtApp();
    const props = defineProps(['request']);
    const request = props.request;
    async function deleteRequest(){
        await $requestStore.destroy(request.id);
    }
</script>
<template>
    <tr>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div class="inline-flex items-center gap-x-3">
                                        <div class="flex items-center gap-x-2">
                                            <div>
                                                <h2 class="font-medium text-gray-800 none:text-white ">{{ request.service }}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 none:bg-gray-800">
                                        <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                        <h2 class="text-sm font-normal text-emerald-500">{{ request.status }}</h2>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm text-gray-500 none:text-gray-300 whitespace-nowrap">{{ request.price }}</td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="flex items-center gap-x-6">
                                        <button class="text-gray-500 transition-colors duration-200 none:hover:text-red-500 none:text-gray-300 hover:text-red-500 focus:outline-none" @click="deleteRequest">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>

                                    </div>
                                </td>
                            </tr>
</template>