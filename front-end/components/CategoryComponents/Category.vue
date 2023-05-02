<script setup>
const props = defineProps(['category']);
const  category = props.category;
</script>

<template>
    <nuxt-link :to="'/Categories/'+ category.id">    
        <div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-80 group"
                    :style='{ backgroundImage: "url(" + category.image + ")", }'>
                    <div
                        class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-blue-800/60 group-hover:opacity-100">
                        <h2 class="mt-4 text-xl font-semibold text-white capitalize">{{category.name}}</h2>
                        <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">{{category.description}}</p>
                    </div>
        </div>
    </nuxt-link>
</template>