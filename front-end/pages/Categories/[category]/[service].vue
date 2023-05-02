<script setup>
import { CubeShadow } from 'vue-loading-spinner';
import { storeToRefs } from 'pinia';
const { service } = useRoute().params;
const { $serviceStore } = useNuxtApp();
const { Service } = storeToRefs($serviceStore);

const setData = async () => { 
    await $serviceStore.show(service);
    if(Object.keys(Service.value).length == 0) {
        throw createError({ statusCode: 404, statusMessage: "Service not found" });
    } 
}
onBeforeMount(async () => {
    await setData();
});
</script>

<template>
    <NuxtLayout>
        <div v-if="Object.keys(Service).length === 0" class="grid place-content-center h-[60vh]">
                <CubeShadow size="120px" background="#6366f1"></CubeShadow>
        </div>
        <div v-else class="min-h-[64.5vh]">
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl mt-10">{{ Service.name }}</h1>

            <p class="mt-4 text-center text-gray-500">{{ Service.description }}</p>
            <div class="bg-white none:bg-gray-900">
                <div class="flex flex-wrap px-6 py-8 justify-center  gap-4 ">
                    <PricingPlan v-for="pack in Service.packages"
                                 :key="pack.id"
                                 :data="pack"
                    />
                </div>
            </div>

            <AddFeedback :service="Number(service)" @post="setData" />

            <div class="flex flex-col px-8 md:px-16 xl:px-20 ">
                <Feedback v-for="feedback in Service.feedbacks?.reverse()"
                          :key="feedback.id"
                          :data="feedback" 
                          @update="setData"
                />
            </div>
        </div>
        
    </NuxtLayout>
</template>