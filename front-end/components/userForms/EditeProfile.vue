<script setup>
import { useVuelidate } from '@vuelidate/core';
import {  email, maxLength, minLength, sameAs, not} from '@vuelidate/validators';
// props
const { $generalStore, $userStore } = useNuxtApp();
const { authUser } = $userStore;
const User = ref({
    fullName: '',
    email: '',
    password: '',
    password_confirmation: ''
});
const isUpdated = computed(() => { 
    return (User.value.password != '' && 
            User.value.password_confirmation != '' ||
            User.value.fullName != '' ||
            User.value.email != ''  ) ? true : false;  
});
const password = computed(() => {return User.value.password})
const rules = {
    fullName: {  minLengthValue: minLength(6), maxLengthValue: maxLength(255) },
    email: { email, minLengthValue: minLength(6), maxLengthValue: maxLength(255), otherProperty: not(sameAs(authUser.email)) },
    password: { minLengthValue: minLength(6) },
    password_confirmation: {  sameAsPassword: sameAs(password) }
};
const v$ = useVuelidate(rules, User)

// methods
async function updateUser(){
    const validation = await v$.value.$validate();
    if(validation) {
        for(let k in User.value)
            if( User.value[k] == '' )
                delete User.value[k]
        if(await $userStore.update(User.value))
            $generalStore.isEditProfileOpen = false;
    }
}
</script>

<template>
    <div 
        id="EditProfileOverlay" 
        class="fixed flex justify-center pt-14 md:pt-[105px] z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto"
    >
        <div 
            class="relative bg-white w-full max-w-[700px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-lg mb-10"
        >

            <div class="absolute flex items-center justify-between w-full p-5 left-0 top-0 border-b border-b-gray-300">
                <div class="text-[22px] font-medium">
                    Edit profile
                </div>  
            </div>

            <div class="h-[calc(500px-200px)] mt-16">
                    <div 
                        id="UsernameSectionSection" 
                        class="flex flex-col border-b sm:h-[118px]  px-1.5 py-2 mt-1.5  w-full"
                    >
                        <div class="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                            Username
                        </div>

                        <div class="flex items-center justify-center sm:-mt-6">
                            <div class="sm:w-[60%] w-full max-w-md">
                                <TextInput 
                                    :placeholder="authUser.fullName"
                                    v-model:input="User.fullName"
                                    inputType="text"
                                />
                                <span class="text-red-500 text-xs" v-for="error in v$.fullName.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div 
                        class="flex flex-col border-b sm:h-[118px]  px-1.5 py-2 mt-1.5  w-full"
                    >
                        <div class="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                            Email
                        </div>

                        <div class="flex items-center justify-center sm:-mt-6">
                            <div class="sm:w-[60%] w-full max-w-md">
                                <TextInput 
                                    :placeholder="authUser.email"
                                    v-model:input="User.email"
                                    inputType="email"
                                    max="30"
                                />
                                <span class="text-red-500 text-xs" v-for="error in v$.email.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col border-b sm:h-[118px]  px-1.5 py-2 mt-1.5  w-full">
                        <div class="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                            Password
                        </div>

                        <div class="flex items-center justify-center sm:-mt-6">
                            <div class="sm:w-[60%] w-full max-w-md">
                                <TextInput 
                                    placeholder="password"
                                    v-model:input="User.password"
                                    inputType="password"
                                />
                                <span class="text-red-500 text-xs" v-for="error in v$.password.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </span>
                                
                            </div>
                        </div>
                        <div class="flex items-center justify-center sm:mt-3">
                            <div class="sm:w-[60%] w-full max-w-md">
                                <TextInput 
                                    placeholder="password Confirmation"
                                    v-model:input="User.password_confirmation"
                                    inputType="password"  
                                />
                                <span class="text-red-500 text-xs" v-for="error in v$.password_confirmation.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div 
                id="ButtonSection" 
                class="absolute p-5 left-0 bottom-0 border-t border-t-gray-300 w-full"
            >
                <div 
                    id="UpdateInfoButtons"
                    class="flex items-center justify-end"
                >
                    <button 
                        @click="$generalStore.isEditProfileOpen = false"
                        class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100"
                    >
                        <span class="px-2 font-medium text-[15px]">Cancel</span>
                    </button>

                    <button 
                        :disabled="!isUpdated"
                        @click="updateUser()"
                        :class="!isUpdated ? 'bg-gray-200' : 'bg-[#F02C56]'"
                        class="flex items-center bg-[#F02C56] text-white border rounded-md ml-3 px-3 py-[6px]"
                    >
                        <span class="mx-4 font-medium text-[15px]">Save</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
