<script setup>
const props = defineProps(['data']);
const emits = defineEmits(['update']);
const { $packageStore } = useNuxtApp();
const packagee = props.data;
const editing = ref(false);
const Package = ref({
    id: packagee.id,
    name: packagee.name,
    price: packagee.price,
    features: packagee.features,
    service_id: packagee.service_id
});
const feature = ref('');
async function Edit(){
    if(await $packageStore.update(Package.value)){
        editing.value = false;
        emits('update');
    }
}
async function destroy(){
    if(await $packageStore.destroy(packagee.id)){
        editing.value = false;
        emits('update');
    }
}
function deleteFeature(id){
    Package.value.features.splice(id, 1);
}
function addFeature(){
    Package.value.features.push(feature.value);
    feature.value = '';
}

function cancle(){
    Package.value.name = packagee.name;
    Package.value.price = packagee.price;
    Package.value.features = packagee.features;
    editing.value = false;
}
</script>

<template>
    <tr>
        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div class="inline-flex items-center gap-x-3">
                <div class="flex items-center gap-x-2">
                    <div>
                        <input  type="text"
                                class="font-medium text-gray-800 none:text-white w-full"
                                :class="{'border border-black p-3': editing}"
                                v-model="Package.name"
                                :readonly="!editing">
                    </div>
                </div>
            </div>
        </td>
        <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <input type="text" v-model="Package.price" class="text-sm font-normal text-emerald-500 w-full outline-none" :class="{'border border-black p-3': editing}" :readonly="!editing" >
        </td>

        <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap flex gap-2">
            <div class="flex flex-wrap px-6 pb-2 gap-2 max-h-20 overflow-auto">
                <span class="bg-gray-300 text-blue-700 px-2 rounded" v-for="feature, index in Package.features" :key="index" >
                    {{ feature }}
                    <span v-if="editing" @click="deleteFeature(index)"  class="bg-gray-400 text-sm text-center text-black rounded-full px-1 py-1 cursor-pointer">
                        <span>x</span>
                    </span>
                </span>
            </div>
            <textarea
                v-if="editing"
                class="block resize-none w-40 h-10 overflow-hidden bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none" 
                v-model="feature"
                placeholder="add features"
                @keyup.enter="addFeature">
            </textarea>
        </td>
        <td class="px-4 py-4 text-sm whitespace-nowrap">
            <div class="flex items-center gap-x-6">

                <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none" @click="editing = true" v-if="!editing">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </button>
                <button class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none" v-if="!editing" @click="destroy">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
                
                <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none" v-if="editing" @click="Edit">
                    <svg fill="#000000" width="25px" height="25px" viewBox="0 0 256 256" stroke-width="1.5" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="evenodd">
                            <path d="M65.456 48.385c10.02 0 96.169-.355 96.169-.355 2.209-.009 5.593.749 7.563 1.693 0 0-1.283-1.379.517.485 1.613 1.67 35.572 36.71 36.236 37.416.665.707.241.332.241.332.924 2.007 1.539 5.48 1.539 7.691v95.612c0 7.083-8.478 16.618-16.575 16.618-8.098 0-118.535-.331-126.622-.331-8.087 0-16-6.27-16.356-16.1-.356-9.832.356-118.263.356-126.8 0-8.536 6.912-16.261 16.932-16.261zm-1.838 17.853l.15 121c.003 2.198 1.8 4.003 4.012 4.015l120.562.638a3.971 3.971 0 0 0 4-3.981l-.143-90.364c-.001-1.098-.649-2.616-1.445-3.388L161.52 65.841c-.801-.776-1.443-.503-1.443.601v35.142c0 3.339-4.635 9.14-8.833 9.14H90.846c-4.6 0-9.56-4.714-9.56-9.14s-.014-35.14-.014-35.14c0-1.104-.892-2.01-1.992-2.023l-13.674-.155a1.968 1.968 0 0 0-1.988 1.972zm32.542.44v27.805c0 1.1.896 2.001 2 2.001h44.701c1.113 0 2-.896 2-2.001V66.679a2.004 2.004 0 0 0-2-2.002h-44.7c-1.114 0-2 .896-2 2.002z"/>
                            <path d="M127.802 119.893c16.176.255 31.833 14.428 31.833 31.728s-14.615 31.782-31.016 31.524c-16.401-.259-32.728-14.764-32.728-31.544s15.735-31.963 31.91-31.708zm-16.158 31.31c0 9.676 7.685 16.882 16.218 16.843 8.534-.039 15.769-7.128 15.812-16.69.043-9.563-7.708-16.351-15.985-16.351-8.276 0-16.045 6.52-16.045 16.197z"/>
                        </g>
                    </svg>
                </button>

                <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none" v-if="editing" @click="cancle">
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="#000000"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="#000000"/>
                    </svg>
                </button>
                
            </div>
        </td>
    </tr>
</template>