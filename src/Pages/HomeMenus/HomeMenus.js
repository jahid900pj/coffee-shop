import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleHomeMenu from '../SingleHomeMenu/SingleHomeMenu';
import { Link } from 'react-router-dom';

const HomeMenus = () => {
    const menuBgStyle = {
        backgroundImage: `url('https://kaffen.bslthemes.com/wp-content/uploads/2022/04/category_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const { data: menus = [], isLoading } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/menus`)
            const data = await res.json()
            // console.log(data)
            return data
        }
    })
    // console.log(menus)


    return (
        <div className='bg-primary'>
            <div className='mt-20 mb-10'>
                <h4 className='text-center text-secondary'>CHOOSE BEST COFFEE</h4>
                <h1 className='text-4xl font-bold text-white '>Popular Coffee Menu</h1>
            </div>
            <div class="flex  items-center justify-center bg-primary">
                <div class="grid lg:mb-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {
                        menus.slice(0, 3).map(menu =>
                            <SingleHomeMenu
                                key={menu._id}
                                menu={menu}
                            >
                            </SingleHomeMenu>)
                    }


                </div>

            </div>
            <button class="rounded-lg bg-secondary py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 font-bold mb-16"><Link to='/menu'>See More</Link></button>
        </div>

    );
};

export default HomeMenus;