import { useQuery } from '@tanstack/react-query';
import React from 'react';
import OneMenu from './OneMenu';

const Menu = () => {
    const menuBgStyle = {
        backgroundImage: `url('https://kaffen.bslthemes.com/wp-content/uploads/2022/04/category_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    const { data: menus = [], isLoading } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await fetch(`https://coffee-shop-server-six.vercel.app/menus`)
            const data = await res.json()
            // console.log(data)
            return data
        }
    })

    return (
        <div style={menuBgStyle} >
            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 '>
                {
                    menus.map(menu => <OneMenu key={menu._id} menu={menu}></OneMenu>)
                }
            </div>
        </div>
    );
};

export default Menu;