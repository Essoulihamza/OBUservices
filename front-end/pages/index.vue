<template>
    <NuxtLayout>
        <main>
            <section>
                <div class="relative grid w-full bg-indigo-500 h-96 lg:h-[32rem] place-items-center">
                    <div class="flex flex-col items-center mx-auto text-center">
                        <h1 class="text-4xl font-semibold text-white uppercase md:text-6xl">Obuservices</h1>
        
                        <p class="mt-6 text-lg leading-5 text-white">The best in town</p>
        
                        <a href="#about" class="mt-8 cursor-pointer animate-bounce">
                            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="26" r="18" stroke="white" stroke-width="2" />
                                <path
                                    d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                                    fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
        
                <svg class="fill-indigo-500" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
                </svg>
            </section>
            <section class="container px-6 py-8 mx-auto lg:py-16 " id="about">
                <div class="lg:flex lg:items-center lg:-mx-4">
                    <div class="lg:w-1/2 lg:px-4">
                        <h3 class="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">We providing the best services quality</h3>
        
                        <p class="mt-6 text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam
                            provident voluptatum id magni iste nobis corrupti, delectus quis repellat, debitis error quod
                            explicabo molestiae rerum totam ab sunt excepturi?</p>
        
                        <button class="flex items-center mt-8 -mx-2 text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mx-1" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="mx-1 font-semibold">PLAY VIDEO</p>
                        </button>
                    </div>
        
                    <div class="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
                        <img class="object-cover w-full rounded-xl h-96"
                            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Video thumbnail">
                    </div>
                </div>
            </section>
            <section class="container px-6 py-8 mx-auto lg:py-16">
                <div class="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div class="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
                        <span class="inline-block text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>
        
                        <h1 class="text-2xl font-semibold text-gray-700 capitalize">web design</h1>
        
                        <p class="text-gray-500">
                            Research, user experience testing, mockups, and prototypes
                        </p>
                    </div>
        
                    <div class="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
                        <span class="inline-block text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </span>
        
                        <h1 class="text-2xl font-semibold text-gray-700 capitalize">development</h1>
        
                        <p class="text-gray-500">
                            Research, user experience testing, mockups, and prototypes
                        </p>
                    </div>
        
                    <div class="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
                        <span class="inline-block text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>
        
                        <h1 class="text-2xl font-semibold text-gray-700 capitalize">research</h1>
        
                        <p class="text-gray-500">
                            Research, user experience testing, mockups, and prototypes
                        </p>
                    </div>
                </div>
            </section>
            <section class="container px-6 py-8 mx-auto lg:py-16">
                <h3 class="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl ">Our Projects</h3>        
                <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
                    <a href="#" class="transition-all duration-500 lg:col-span-2 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="https://cdn.dribbble.com/users/1644453/screenshots/17056773/media/00509f74e765da294440886db976943a.png?compress=1&resize=1000x750&vertical=top"
                            alt="">
                    </a>

                    <a href="#" class="transition-all duration-500 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96 "
                            src="https://cdn.dribbble.com/userupload/3233220/file/original-e80767b5947df65a0f1ab4dab4964679.png?compress=1&resize=1024x768"
                            alt="">
                    </a>

                    <a href="#" class="transition-all duration-500 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="https://cdn.dribbble.com/users/1644453/screenshots/14748860/media/25f53296059b741ac1c083be9f41745b.png?compress=1&resize=1000x750&vertical=top"
                            alt="">
                    </a>

                    <a href="#" class="transition-all duration-500 lg:col-span-2 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="https://cdn.dribbble.com/users/878428/screenshots/17307425/media/01782a518148ce7ef2e790473c888b1f.png?compress=1&resize=1000x750&vertical=top"
                            alt="">
                    </a>

                    <a href="#" class="transition-all duration-500 lg:col-span-2 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="https://cdn.dribbble.com/users/1930709/screenshots/11466872/media/e50b0f02160a77397eb4a76782d23966.png?compress=1&resize=1000x750&vertical=top"
                            alt="">
                    </a>

                    <a href="#" class="transition-all duration-500 hover:scale-105">
                        <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                            src="https://cdn.dribbble.com/users/1644453/screenshots/14403641/media/21e305eb9c8255b6e3367f0ca52c6668.png?compress=1&resize=1000x750&vertical=top"
                            alt="">
                    </a>
                </div>
            </section>
            <section class="bg-white dark:bg-gray-900">
    <div class="max-w-3xl px-6 py-16 mx-auto text-center">
        <h1 class="text-3xl font-semibold text-gray-800 dark:text-gray-100">Want to see Back in action?</h1>
        <p class="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, minus tempora nemo quos</p>

        <div class="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Email Address">

            <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Get Started
            </button>
        </div>
    </div>
</section>
        </main>
    </NuxtLayout>
</template>