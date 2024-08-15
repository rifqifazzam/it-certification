"use client";
import React from 'react';
// import { useState } from 'react';

export default function DashboardLayout({ children }) {

    return (
        <div className='flex flex-row min-h-screen'>
            {/* <Sidebar isCollapsed={isCollapsed} /> */}
            <div className="flex-grow flex flex-col h-screen w-full">
                {/* <Navbar toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} /> */}
                <div className="flex-grow flex flex-col h-full w-full">
                    {children}
                </div>
            </div>
        </div>
    )


}