"use client";

const Navbar = ({ toggleSidebar, isCollapsed }) => { 
    return (

    <nav className={`bg-white xl:fixed ${isCollapsed ? 'left-0 lg:px-10 sm:px-4' : 'lg:pl-16 xl:pl-8 xl:left-64 md:left-0 sm:left-0'} right-0 z-40 flex items-center justify-between p-4 h-16 transition-all duration-300`}>

        <p className="text-red-500">Haloo</p>
    </nav>
    );
}

export default Navbar;