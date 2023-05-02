<script setup>
const { $categoryStore, $generalStore } = useNuxtApp();
const category = ref({
    name: '',
    description: '',
    image: ''
});
function uploadImg(e){
    category.value.image = e.target.files[0];
}

async function submit(){
    if(await $categoryStore.store(category.value)) {
        $generalStore.isAddFormOpen = false;
    }
}
</script>
<template>
    <div class="px-6 pb-2">
        <TextInput 
            placeholder="category name"
            v-model:input="category.name"
            inputType="text"
            :autoFocus="true"
        />
    </div>

    <div class="px-6 pb-2">
        <textarea
            class="block resize-none h-14 w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none" 
            v-model="category.description"
            placeholder="Category Description">
        </textarea>
    </div>

    <div class="px-6 pb-2">
        <input type="file"
                class="block  w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none"
                @change="uploadImg($event)"  >
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