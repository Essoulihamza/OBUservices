<script setup>
const { $serviceStore, $generalStore, $categoryStore } = useNuxtApp();
const service = ref({
    name: '',
    category: '',
    description: ''
});
const categories = ref([]);
onMounted(async () =>{
    categories.value = await $categoryStore.index();
});

async function submit(){
    console.log(service.value.category);
    if(await $serviceStore.store(service.value)) {
        $generalStore.isAddFormOpen = false;
    }
}
</script>
<template>
    <div class="px-6 pb-2">
        <TextInput 
            placeholder="service name"
            v-model:input="service.name"
            inputType="text"
            :autoFocus="true"
        />
    </div>

    <div class="px-6 pb-2">
        <select 
            v-model="service.category"
            class="block resize-none w-full h-12 bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none" >
            <option value="" selected>Select Category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id" >{{ category.name }}</option>
        </select>
    </div>

    <div class="px-6 pb-2">
        <textarea
            class="block resize-none h-40 w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none" 
            v-model="service.description"
            placeholder="service Description">
        </textarea>
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