<script setup>
const props = defineProps(['service']);
const emits = defineEmits(['post']);
const { $feedbackStore } = useNuxtApp();
const feedback = ref({
   content: '',
   service_id: props.service
});
async function submit(){
   await $feedbackStore.store(feedback.value);
   emits('post');
   feedback.value.content = '';
}
</script>


<template>
    <div class="flex  items-center mx-8 md:ml-16 xl:ml-20 shadow-lg mt-20  mb-4 max-w-xl">
   <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
      <div class="flex flex-wrap -mx-3 mb-6">
         <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new Feedback</h2>
         <div class="w-full md:w-full px-3 mb-2 mt-2">
            <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" v-model="feedback.content" name="body" placeholder='Type Your Feedback' required></textarea>
         </div>
         <div class="w-full md:w-full flex items-start md:w-full px-3">
            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
               <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
               </svg>
               <p class="text-xs md:text-sm pt-px">please be respectfull as much as you can.</p>
            </div>
            <div class="-mr-1">
               <input type='submit' @click.prevent="submit" class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Feedback'>
            </div>
         </div>
        </div>
      </form>
   </div>

</template>