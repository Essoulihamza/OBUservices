import { defineStore } from "pinia";
import { $axios } from '~/axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useFeedbackStore = defineStore('Feedback', () => {
    const feedback = ref([]);


    async function index(){
        try{
            let res = await $axios.get('Feedback');
            feedback.value = res.data;
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }

    async function store(data){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.post('Feedback', data, {
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            });
            toast.success(res.data.message);
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }
    
    async function update(Feedback){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.patch('Feedback/' + Feedback.id, Feedback, {
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            });
            toast.success(res.data.message);
            return true;
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }

    async function destroy(data){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.delete('Feedback/' + data, {
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            });
            toast.success(res.data.message);
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }

    return {
        feedback,
        index,
        store,
        update,
        destroy
    }
});