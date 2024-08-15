"use client";
import React from 'react';
import { useState } from 'react';

import Sidebar from '@/components/navigation/Sidebar';
import Navbar from '@/components/navigation/Navbar';

export default function DashboardLayout({ children }) {

    const [isCollapsed] = useState(false);

    // const toggleSidebar = () => {
    //     setIsSidebarCollapsed(!isCollapsed);
    //     console.log(isCollapsed);
    // };

    return (
        <div className='flex flex-row min-h-screen'>
            <Sidebar isCollapsed={isCollapsed} />

            <div className="flex-grow flex flex-col h-screen w-full">
                <Navbar isCollapsed={isCollapsed} />
                <div className="flex-grow flex flex-col h-full w-full  bg-home-background">
                    {children}
                </div>
            </div>
        </div>
    )


}   