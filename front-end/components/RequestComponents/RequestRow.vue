<script setup>
const props = defineProps(['data']);
const emits = defineEmits(['update']);
const { $requestStore } = useNuxtApp();
const request = props.data;
const status = ref(request.status); 
console.log(request);
async function acceptRequest(){
    if(await $requestStore.update(request.id, 'accepted')){
        status.value = "accepted";
        emits('update');
    }
}
async function refuseRequest(){
    if(await $requestStore.update(request.id, 'refused')){
        status.value = "refused";
        emits('update'); 
    }
    
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
                                v-model="request.user"
                                readonly>
                    </div>
                </div>
            </div>
        </td>
        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div class="inline-flex items-center gap-x-3">
                <div class="flex items-center gap-x-2">
                    <div>
                        <input  type="text"
                                class="font-medium text-gray-800 none:text-white w-full"
                                :class="{'border border-black p-3': editing}"
                                v-model="request.service"
                                readonly>
                    </div>
                </div>
            </div>
        </td>
        <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 none:bg-gray-800">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" 
                      :class="{'bg-blue-500': status == 'accepted',
                                'bg-red-500': status == 'refused'}">
                </span>

                <h2 class="text-sm font-normal text-emerald-500" :class="{'text-blue-500': status == 'accepted',
                                'text-red-500': status == 'refused'}">{{ status }}</h2>
            </div>
        </td>
        <td class="px-4 py-4 text-sm text-gray-500 none:text-gray-300 whitespace-nowrap">{{ request.price }}</td>
        <td class="px-4 py-4 text-sm whitespace-nowrap">
            <div class="flex items-center gap-x-6">
                <button class="text-gray-500 transition-colors duration-200 none:hover:text-red-500 none:text-gray-300 hover:text-red-500 focus:outline-none" @click="acceptRequest">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke-width="1.5"  xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V4C21 2.34315 19.6569 1 18 1H10ZM11 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3ZM9 7H6.41421L9 4.41421V7ZM16.7682 12.6402C17.1218 12.2159 17.0645 11.5853 16.6402 11.2318C16.2159 10.8782 15.5853 10.9355 15.2318 11.3598L10.9328 16.5186L8.70711 14.2929C8.31658 13.9024 7.68342 13.9024 7.29289 14.2929C6.90237 14.6834 6.90237 15.3166 7.29289 15.7071L10.2929 18.7071C10.4916 18.9058 10.7646 19.0117 11.0453 18.999C11.326 18.9862 11.5884 18.856 11.7682 18.6402L16.7682 12.6402Z" fill="#000000"/>
                    </svg>
                </button>
                <button class="text-gray-500 transition-colors duration-200 none:hover:text-red-500 none:text-gray-300 hover:text-red-500 focus:outline-none" @click="refuseRequest">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="#000000"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="#000000"/>
                    </svg>
                </button>
            </div>
        </td>
    </tr>
</template>