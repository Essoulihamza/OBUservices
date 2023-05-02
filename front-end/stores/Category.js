import { defineStore } from "pinia";
import { $axios } from '~/axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useCategoryStore = defineStore('Category', () => {

    const categories = ref([]);


    async function index(){
        try{
            let res = await $axios.get('Category');
            categories.value = res.data.data;
            return res.data.data;
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }

    async function show(category){
        try{
            let res = await $axios.get('Category/'+ category);
            return res.data.data;
        }catch(error){
            if(error.response) 
                toast.error(error.response.data.message);
            else if(error.request)
                console.log(error.request);
            else 
                console.log('Error: ', error.message);
        }
    }

    async function store(category){
        let token = localStorage.getItem('token');
        let data = new FormData();
        data.append('name', category.name);
        data.append('description', category.description);
        data.append('image', category.image);
        try{
            let res = await $axios.post('Category', data, {
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            });
            await index();
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
    
    async function update(Category){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.patch('Category/' + Category.id, Category, {
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

    async function destroy(Category){
        let token = localStorage.getItem('token');
        try{
            let res = await $axios.delete('Category/' + Category, {
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

    return {
        categories,
        index,
        show,
        store,
        update,
        destroy
    }
});