<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs, minLength, maxLength } from '@vuelidate/validators'
// props 
const { $userStore, $generalStore } = useNuxtApp();
const User = ref({
    fullName: "",
    email : "",
    password: "",
    password_confirmation: "",
});
const password = computed(() => {return User.value.password})
const rules = {
    fullName: { required, minLengthValue: minLength(6), maxLengthValue: maxLength(255) },
    email: { required, email, minLengthValue: minLength(6), maxLengthValue: maxLength(255) },
    password: { required },
    password_confirmation : { required, sameAsPassword: sameAs(password) }
};

const v$ = useVuelidate(rules, User);

// methods
async function SignUp(){
   
    const validation = await v$.value.$validate();
    if(validation)
        if(await $userStore.signUp(User.value))
            $generalStore.isLoginOpen = false;

}

</script>

<template>
    <div class="text-center text-[28px] mb-4 font-bold">Sign Up</div>

    <div class="px-6 pb-1.5 text-[15px]">Full name</div>

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Full name"
            v-model:input="User.fullName"
            inputType="text"
            :autoFocus="true"
            error=""
        />
        <span class="text-red-500 text-xs" v-for="error in v$.fullName.$errors" :key="error.$uid">
            {{ error.$message }}
        </span>
    </div>

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Email address"
            v-model:input="User.email"
            inputType="email"
            error=""
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

    <div class="px-6 pb-2">
        <TextInput 
            placeholder="Password Confirmation"
            v-model:input="User.password_confirmation"
            inputType="password"
        />
        <span class="text-red-500 text-xs" v-for="error in v$.password_confirmation.$errors" :key="error.$uid">
            {{ error.$message }}
        </span>
    </div>

    <div class="px-6 pb-2 mt-6">
        <button 
            :disabled="( !User.fullName || !User.email || !User.password || !User.password_confirmation)"
            :class="(!User.fullName || !User.email || !User.password || !User.password_confirmation) ? 'bg-gray-200' : 'bg-blue-700'"
            class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
            @click="SignUp"
        >
            Sign Up
        </button>
    </div>
</template>