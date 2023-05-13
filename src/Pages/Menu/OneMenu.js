import React from 'react';

const OneMenu = ({ menu }) => {
    const { name, img, description, price } = menu;
    return (
        <div class="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 mt-10 mb-10 text-start rounded-lg">

            <img src={img} alt="Product image" class="h-80 w-72 object-cover" />

            <div class="px-4 py-3 w-72 bg-secondary ">

                <p class="text-lg font-bold text-white truncate block capitalize">{name}</p>
                <p class="text-white mr-3 uppercase text-sm ">{description}</p>
                <div class="flex items-center">
                    <p class="text-2xl font-semibold text-black cursor-auto my-3">{price}</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$3.2</p>
                    </del>
                    <div class="ml-auto">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <button className='font-bold border-b-2'>+Add to card</button>
            </div>
        </div>
    );
};

export default OneMenu;