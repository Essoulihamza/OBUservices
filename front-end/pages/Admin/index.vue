<script setup>
import { storeToRefs } from 'pinia';

    definePageMeta({
        middleware: 'admin-guard',
    });
    const isOpen = ref(false);
    const dropdownOpen = ref(false);
    const { $generalStore, $userStore } = useNuxtApp(); 
    const { selectedTable } = storeToRefs($generalStore);
</script>



<template>
    <div class="relative min-h-screen lg:flex">
        <header class="text-gray-100 bg-gray-800 lg:hidden">
            <div class="container flex items-center justify-between p-4 mx-auto">
                <a href="#" class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </a>
                
                <button @click="isOpen = !isOpen" class="p-2 text-white rounded-lg focus:outline-none hover:bg-gray-700">
                    <svg v-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
    
                    <svg v-show="isOpen" class="w-6 h-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </header>

        <div v-cloak :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false" class="fixed inset-0 z-20 transition-opacity bg-black opacity-30 lg:hidden"></div>

        <main id="content" class="flex-1 pb-12 space-y-6 overflow-y-auto bg-gray-100 lg:h-screen md:space-y-8">
            <header class="flex items-center justify-between h-20 px-6 bg-white border-b">
                <div class="flex items-center w-full justify-end">
                    <div class="relative">
                        <button class="transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 focus:outline-none hover:bg-gray-100" @click="dropdownOpen = !dropdownOpen">
                            <span class="sr-only">User Menu</span>
                            <div class="flex items-center md:-mx-2 ">
                                <div class="hidden md:mx-2 md:flex md:flex-col md:items-end md:leading-tight">
                                    <span class="font-semibold text-sm text-gray-800">{{ $userStore.authUser.fullName }}</span>
                                </div>
                            </div>
                        </button>
                        
                    </div>

                    <div v-show="dropdownOpen" class="fixed inset-0 z-30" @click="dropdownOpen = false"></div>

                    <button class="p-2 text-gray-400 transition-colors duration-300 rounded-full focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100" @click="$userStore.logOut">
                        <span class="sr-only">Log out</span>
                        
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </div>
            </header>

            <section class="flex flex-col w-full px-6 md:justify-between md:items-center md:flex-row">
                <div>
                    <h2 class="text-3xl font-medium text-gray-800">Dashboard</h2>
                    <p class="mt-2 text-sm text-gray-500">CRUD category / service / package</p>
                </div>

                <div class="flex flex-col mt-6 md:flex-row md:-mx-1 md:mt-0">
                    <button class="px-6 py-3 focus:outline-none mt-4 text-white bg-blue-600 rounded-lg md:mt-0 md:mx-1 hover:bg-blue-500" @click="$generalStore.isAddFormOpen = true">
                        <div class="flex items-center justify-center -mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
    
                            <span class="mx-1 text-sm capitalize">Add</span>
                        </div>
                    </button>
                </div>
            </section>

            <section class="grid grid-cols-1 gap-8 px-6 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2">
                <div class="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200 " @click="selectedTable = 'Categories'">
                    <div class="flex items-center -mx-2">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div class="mx-2">
                            <p class="mt-1 text-sm text-gray-500">Categories</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200 " @click="selectedTable = 'Services'">
                    <div class="flex items-center -mx-2">
                        <svg fill="#000000" width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 16q0-0.832 0.576-1.408t1.44-0.576h1.984q0.032 0 0.064 0t0.064 0.032 0.064 0q0.448-2.72 2.080-4.992-0.128-0.064-0.16-0.096l-1.408-1.44q-0.608-0.576-0.608-1.408t0.608-1.408 1.408-0.608 1.408 0.608l1.408 1.408q0.032 0.032 0.096 0.16 2.304-1.632 5.024-2.048 0-0.032-0.032-0.096t0-0.128v-1.984q0-0.832 0.576-1.408t1.408-0.608 1.408 0.608 0.608 1.408v1.984q0 0.032-0.032 0.096t0 0.128q2.72 0.416 4.992 2.048 0.064-0.128 0.096-0.16l1.408-1.408q0.576-0.608 1.408-0.608t1.44 0.608 0.576 1.408-0.576 1.408l-1.408 1.408q-0.064 0.064-0.192 0.128 1.632 2.272 2.080 4.992 0.032 0 0.096 0t0.096-0.032h2.016q0.8 0 1.408 0.576t0.576 1.408-0.576 1.44-1.408 0.576h-2.016q-0.032 0-0.096-0.032t-0.096-0.032q-0.448 2.752-2.080 5.024 0.128 0.064 0.192 0.128l1.408 1.408q0.576 0.576 0.576 1.376t-0.576 1.44-1.44 0.576-1.408-0.576l-1.408-1.408q-0.032-0.064-0.096-0.16-2.272 1.6-4.992 2.048 0 0.032 0 0.096t0.032 0.096v2.016q0 0.832-0.608 1.408t-1.408 0.576-1.408-0.576-0.576-1.408v-2.016q0-0.032 0-0.096t0.032-0.096q-2.72-0.448-5.024-2.048-0.064 0.128-0.096 0.16l-1.408 1.408q-0.576 0.576-1.408 0.576t-1.408-0.576-0.608-1.44 0.608-1.376l1.408-1.408q0.064-0.064 0.16-0.128-1.632-2.272-2.080-5.024 0 0-0.064 0.032t-0.128 0.032h-1.984q-0.832 0-1.44-0.576t-0.576-1.44zM10.016 16q0 2.496 1.728 4.256t4.256 1.76 4.256-1.76 1.76-4.256-1.76-4.224-4.256-1.76-4.256 1.76-1.728 4.224z"></path>
                        </svg>
    
                        <div class="mx-2">
                            <p class="mt-1 text-sm text-gray-500">Services</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200 " @click="selectedTable = 'Packages'">
                    <div class="flex items-center -mx-2">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 8.80835C5.5 8.80835 5 10.6111 5 13.5C5 16.3889 5.38889 18.9167 5.77778 19.2778C6.16667 19.6389 8.88889 20 12 20C15.1111 20 17.8333 19.6389 18.2222 19.2778C18.6111 18.9167 19 16.3889 19 13.5C19 10.6111 18.5 8.80835 18.5 8.80835M5.5 8.80835C6.65798 8.91328 9.19021 9 12 9C14.8098 9 17.342 8.91328 18.5 8.80835M5.5 8.80835C5.19265 8.7805 4.98211 8.75135 4.88889 8.72222C4.44444 8.58333 4 7.61111 4 6.5C4 5.38889 4.44444 4.41667 4.88889 4.27778C5.33333 4.13889 8.44444 4 12 4C15.5556 4 18.6667 4.13889 19.1111 4.27778C19.5556 4.41667 20 5.38889 20 6.5C20 7.61111 19.5556 8.58333 19.1111 8.72222C19.0179 8.75135 18.8074 8.7805 18.5 8.80835M10 13C10 13 10.5 12.5 12 12.5C13.5 12.5 14 13 14 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
    
                        <div class="mx-2">
                            <p class="mt-1 text-sm text-gray-500">Packages</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center px-6 py-8 bg-white rounded-lg shadow-md shadow-gray-200 ">
                    <div class="flex items-center -mx-2" @click="selectedTable = 'Requests'">
                        <svg fill="#000000" width="35px" height="35px" viewBox="0 0 16 16" id="request-refund-16px" xmlns="http://www.w3.org/2000/svg">
                            <path id="Path_45" data-name="Path 45" d="M-16,11a2,2,0,0,0,2-2,2,2,0,0,0-2-2,2,2,0,0,0-2,2A2,2,0,0,0-16,11Zm0-3a1,1,0,0,1,1,1,1,1,0,0,1-1,1,1,1,0,0,1-1-1A1,1,0,0,1-16,8Zm2.5,4h-5A2.5,2.5,0,0,0-21,14.5,1.5,1.5,0,0,0-19.5,16h7A1.5,1.5,0,0,0-11,14.5,2.5,2.5,0,0,0-13.5,12Zm1,3h-7a.5.5,0,0,1-.5-.5A1.5,1.5,0,0,1-18.5,13h5A1.5,1.5,0,0,1-12,14.5.5.5,0,0,1-12.5,15Zm5-15h-7A2.5,2.5,0,0,0-17,2.5v3a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5v-3A1.5,1.5,0,0,1-14.5,1h3V2A1.5,1.5,0,0,0-13,3.5,1.5,1.5,0,0,0-11.5,5V6h-1a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1v.5A.5.5,0,0,0-11,8a.5.5,0,0,0,.5-.5V7A1.5,1.5,0,0,0-9,5.5,1.5,1.5,0,0,0-10.5,4V3h1A.5.5,0,0,0-9,2.5.5.5,0,0,0-9.5,2h-1V1h3A1.5,1.5,0,0,1-6,2.5v5A1.5,1.5,0,0,1-7.5,9h-3a.5.5,0,0,0-.354.146L-12,10.293V9.5a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.309.462A.489.489,0,0,0-12.5,12a.5.5,0,0,0,.354-.146L-10.293,10H-7.5A2.5,2.5,0,0,0-5,7.5v-5A2.5,2.5,0,0,0-7.5,0ZM-10,5.5a.5.5,0,0,1-.5.5V5A.5.5,0,0,1-10,5.5ZM-11.5,4a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5Z" transform="translate(21)"/>
                        </svg>
    
                        <div class="mx-2">
                            <p class="mt-1 text-sm text-gray-500">Service Request</p>
                        </div>
                    </div>
                </div>

                
            </section>
            <div class="px-6">
                <CategoryTable v-if="selectedTable == 'Categories'"/>
                <ServiceTable v-if="selectedTable == 'Services'" />
                <PackageTable v-if="selectedTable == 'Packages'" />
                <RequestTable v-if="selectedTable == 'Requests'" />
            </div>
        </main>
    </div>
</template>

