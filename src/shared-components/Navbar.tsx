"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    if(!pathName.includes('dashboard')){
    return (
        <div>
            <nav className='flex justify-center'>
                <ul className='flex justify-between w-1/2'>
                   <Link href={'/'}> <li>Blog</li></Link>
                   <Link href={'/blogDetails'}> <li>Blog Details</li></Link>
                   <Link href={'/about'}> <li>About</li></Link>
                   <Link href={'/products/add'}> <li>Add Products</li></Link>
                   <Link href={'/products'}> <li>Products</li></Link>
                 
                    
                </ul>
            </nav>
            
        </div>
    );
}
else{
    return  <></>
    
}
};

export default Navbar;