<script setup>
const { $packageStore, $generalStore, $serviceStore } = useNuxtApp();
const Package = ref({
    name: '',
    price: '',
    service: '',
    features: []
});
const filtredServices = ref([]);
onMounted(async () =>{
    const services =  await $serviceStore.index();
    filtredServices.value = services.filter( (service) => service.packages_count < 4);
});
const feature = ref('');
function addFeature(){
    Package.value.features.push(feature.value.replace(/ +$/, ""));
    feature.value = "";
}
async function submit(){
    if(await $packageStore.store(Package.value)) {
        $generalStore.isAddFormOpen = false;
    }
}
</script>
<template>
    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Package name"
            v-model:input="Package.name"
            inputType="text"
            :autoFocus="true"
        />
    </div>

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Package price"
            v-model:input="Package.price"
            inputType="number"
        />
    </div>

    <div class="px-6 pb-2">
        <select 
            v-model="Package.service"
            class="block resize-none w-full h-12 bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none" >
            <option value="" selected>Select Service</option>
            <option v-for="service in filtredServices" :key="service.id" :value="service.id" >{{ service.name }}</option>
        </select>
    </div>

    <div class="px-6 pb-2">
        <textarea
            class="block resize-none w-full h-12 bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none" 
            v-model="feature"
            placeholder="Package features"
            @keyup.enter="addFeature">
        </textarea>
    </div>

    <div class="flex flex-wrap px-6 pb-2 gap-2 max-h-20 overflow-auto">
        <span class="bg-gray-300 text-blue-700 px-2 rounded" v-for="feature, index in Package.features" :key="index" >
            {{ feature }}
        </span>
    </div>

    <div class="px-6 pb-2 mt-6">
        <button 
            class="bg-blue-700 w-full text-[17px] font-semibold text-white py-3 rounded-sm"
            @click="submit"
        >
            submit
        </button>
    </div>
</template>