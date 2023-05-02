<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength, minLength} from '@vuelidate/validators'
// props 
const { $userStore, $generalStore } = useNuxtApp();
const User = ref({
    email : "",
    password: ""
});
const rules = {
    email: { required, email, minLengthValue: minLength(6), maxLengthValue: maxLength(255) },
    password: { required , min: minLength(6) }
}

const v$ = useVuelidate(rules, User)

// methods
async function login(){
    const validation = await v$.value.$validate();
    if(validation)
        if(await $userStore.login(User.value))
            $generalStore.isLoginOpen = false;

}

</script>





<template>
    <div class="text-center text-[28px] mb-4 font-bold">Log in</div>

    <div class="px-6 pb-1.5 text-[15px]">Email address</div>

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Email address"
            v-model:input="User.email"
            inputType="email"
            :autoFocus="true"
        />
        <span class="text-red-500 text-xs" v-for="error in v$.email.$errors" :key="error.$uid">
            {{ error.$message }}
        </span>
    </div>

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Password"
            v-model:input="User.password"
            inputType="password"
        />
        <span class="text-red-500 text-xs" v-for="error in v$.password.$errors" :key="error.$uid">
            {{ error.$message }}
        </span>
    </div>

    <div class="px-6 pb-2 mt-6">
        <button 
            :disabled="( !User.email || !User.password )"
            :class="(!User.email || !User.password) ? 'bg-gray-200' : 'bg-blue-700'"
            class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
            @click="login()"
        >
            Log in
        </button>
    </div>
</template>