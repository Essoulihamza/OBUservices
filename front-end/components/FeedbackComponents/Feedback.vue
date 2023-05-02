<script setup>
import { storeToRefs } from 'pinia';

const props = defineProps(['data']);
const emits = defineEmits(['update']);
const feedback = props.data;
const { $userStore, $feedbackStore } = useNuxtApp();
const { authUser } = storeToRefs($userStore);
const newFeedback = ref({
    id: feedback.id, 
    content: feedback.content
})
const Editing = ref(false); 
async function deleteFeedback(){
    await $feedbackStore.destroy(feedback.id);
    emits('update');
}
async function update(){
    if(await $feedbackStore.update(newFeedback.value)){
        Editing.value = false;
        emits('update');
    }    
}
function cancle(){
    newFeedback.value.content = feedback.content;
    Editing.value = false;
}

</script>


<template>

<div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg  max-w-full">
    <div class="relative flex gap-4">
        <div class="flex justify-between w-full">
            <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                    <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">{{ feedback.userName }}</p>
                    <a class="text-gray-500 text-xl"><i class="fa-solid fa-trash"></i></a>
                </div>
                <p class="text-gray-400 text-sm">{{ feedback.created_at }}</p>
            </div>
            <div v-if="feedback.userName == authUser.fullName" class="flex gap-x-3">
                <span v-if="!Editing" class="cursor-pointer" @click="Editing = true">edit</span>
                <span v-else class="cursor-pointer" @click="update">save</span>
                <span v-if="!Editing" class="cursor-pointer" @click="deleteFeedback">Delete</span>
                <span v-else class="cursor-pointer" @click="cancle">Cancle</span>
            </div>
        </div>
    </div>
    <input :readonly="!Editing" class="-mt-4 text-gray-500 p-2" :class="{'border border-black p-3': Editing}" v-model="newFeedback.content" />
</div>
</template>