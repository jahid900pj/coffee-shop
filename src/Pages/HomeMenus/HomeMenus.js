import React from 'react';

const HomeMenus = () => {
    const menuBgStyle = {
        backgroundImage: `url(./MedicalValueImages/medicalValue-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        // <div className='bg-primary'>

        // </div>
        <div class="flex min-h-screen items-center justify-center bg-neutral-800">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-xl shadow-black/30">
                    <div class="h-96 w-72">
                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://kaffen.bslthemes.com/wp-content/uploads/2022/03/menu2.jpg" alt="" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-3xl font-bold text-white">Beauty</h1>
                        <p class="mb-3 text-lg italic text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-xl shadow-black/30">
                    <div class="h-96 w-72">
                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://kaffen.bslthemes.com/wp-content/uploads/2022/03/grid_gal1.jpg" alt="" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-3xl font-bold text-white">Beauty</h1>
                        <p class="mb-3 text-lg italic text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-xl shadow-black/30">
                    <div class="h-96 w-72">
                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://kaffen.bslthemes.com/wp-content/uploads/2022/03/grid_gal2-900x601.jpg" alt="" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-3xl font-bold text-white">Beauty</h1>
                        <p class="mb-3 text-lg italic text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeMenus;