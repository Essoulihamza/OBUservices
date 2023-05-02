<script setup>
import { toast } from 'vue3-toastify';

const props = defineProps(['data']);
const pack = props.data;
const { $userStore, $requestStore } = useNuxtApp();
const request = {
    pack_id: pack.id,
    status: 'panding'
};
async function requestService(){
    if(!$userStore.isAuth)
        toast.info('please login first');
    else
    await $requestStore.store(request);
}

</script>
<template>
            <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 none:bg-gray-900 none:border-gray-700 min-w-[300px]">
                <div class="flex-shrink-0">
                    <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 none:bg-gray-700">
                        {{ pack.name }}
                    </h2>
                </div>

                <div class="flex-shrink-0">
                    <span class="pt-2 text-3xl font-bold text-gray-800 uppercase none:text-gray-100">
                        {{ pack.price }}$ 
                    </span>
                </div>

                <ul class="flex flex-col space-y-4">
                    <li class="text-gray-500 none:text-gray-400" v-for="feature, index in pack.features" :key="index">
                        {{ feature }}
                    </li>
                </ul>

                <button class="inline-flex items-center  justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none" @click="requestService">
                    request service
                </button>
            </div>
</template>