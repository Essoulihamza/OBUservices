<script setup> 
    const { $generalStore } = useNuxtApp();
    const selected = ref('Category');
</script>


<template>
    <div 
        id="AuthOverlay" 
        class="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
    >
        <div class="relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg space-y-3">

            <div class="w-full flex justify-end">
                <button 
                    @click="$generalStore.isAddFormOpen = false" 
                    class="p-2 px-4 rounded-full bg-gray-100 font-semibold"
                >
                    X
                </button>
            </div>
            <div class="text-center text-[28px] mb-4 font-bold">Add</div>
            <div class="flex justify-center items-center">
                <ul class="flex gap-x-8">
                    <li class="text-lg font-semibold cursor-pointer" :class="{'underline': selected == 'Category'}" @click="selected = 'Category'">Category</li>
                    <li class="text-lg font-semibold cursor-pointer" :class="{'underline': selected == 'Service'}" @click="selected = 'Service'">Service</li>
                    <li class="text-lg font-semibold cursor-pointer" :class="{'underline': selected == 'Package'}" @click="selected = 'Package'">Package</li>
                </ul>
            </div>
            <div class="py-4">
                <AddCategory v-if="selected == 'Category'"/>
                <AddService v-if="selected == 'Service'" />
                <AddPackage v-if="selected == 'Package'" />
            </div>
            
            
        </div>
    </div>
</template>