<template>
  <NuxtPage />
  <AuthOverlay v-if="isLoginOpen" /> 
  <EditeProfile v-if="isEditProfileOpen" />
  <FormsOverlay v-if="isAddFormOpen" />
</template>

<script setup>
import { storeToRefs } from 'pinia';

const { $generalStore } = useNuxtApp();
const { isLoginOpen, isEditProfileOpen, isAddFormOpen } = storeToRefs($generalStore);
</script>