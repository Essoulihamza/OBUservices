<script setup> 
    const { $generalStore } = useNuxtApp();
    let isRegister = ref(true);
</script>


<template>
    <div 
        id="AuthOverlay" 
        class="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
    >
        <div class="relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg">

            <div class="w-full flex justify-end">
                <button 
                    @click="$generalStore.isLoginOpen  =  false" 
                    class="p-2 px-4 rounded-full bg-gray-100 font-semibold"
                >
                    X
                </button>
            </div>

            <LoginModal v-if="isRegister" />
            <SignUpModal v-else />

            <div class="absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full">
                <span class="text-[14px] text-gray-600" v-if="isRegister">Don’t have an account?</span>
                <span class="text-[14px] text-gray-600" v-else>Already have an  account?</span>
                <button 
                    @click="isRegister =  ! isRegister" 
                    class="text-[14px] text-blue-700 font-semibold pl-1"
                >
                    <span v-if="isRegister">Sign up</span>
                    <span v-else>Log in</span>
                </button>
            </div>
            
        </div>
    </div>
</template>