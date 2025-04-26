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
                   <Link href={'/feedback'}> <li>FeedBack</li></Link>
                   <Link href={'/service'}> <li>Service Card </li></Link>
                   <Link href={'/service2'}> <li>Service Card 2</li></Link>
                   <Link href={'/metricCard'}> <li>MetricCard</li></Link>
                   <Link href={'/activity'}> <li>RecentActivity</li></Link>
                   <Link href={'/serviceDetails'}> <li>Service Detials</li></Link>
                   <Link href={'/tabPanel'}> <li>Subscription </li></Link>
                   <Link href={'/home'}> <li>Home </li></Link>
                   <Link href={'/clickServiceOne'}> <li>ClickServiceOne </li></Link>
                   <Link href={'/homeBlog'}> <li>HomeBlog </li></Link>
                 
                    
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