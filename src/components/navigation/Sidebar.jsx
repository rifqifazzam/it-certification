
import { usePathname } from "next/navigation";import Link from 'next/link';
import { cn } from "@/lib/utils";

const Sidebar = ({ isCollapsed }) => {

    const path = usePathname();
    return (
        <nav className={cn(`relative hidden pt-16 lg:block ${isCollapsed ? 'w-0' : 'w-64'} h-full top-0 `)}>
        <aside className={`fixed shadow-inner flex flex-col h-full ${isCollapsed ? 'w-0 overflow-hidden' : 'w-64'} z-50 top-0 left-0 bg-black`}>
            <div className="mx-4 mt-6 p-2 flex items-center">
                <img
                    src="/static/company-logo.png"
                    alt="Sagara Tech Logo"
                    className="h-13 w-auto"
                />
            </div>

            
            <nav className="flex-grow p-6 space-y-4 mt-7">
                <p className="text-white font-bold"> MENU</p>
                <Link href="/dashboard" className={cn("flex items-center p-4 hover:bg-red-sagara hover:text-white rounded-lg", path === "/dashboard" ? "text-white font-bold" : "text-text-inactive")}>
                    <img src="/static/icon-dashboard.png" className="mr-4 w-5 h-5" ></img>
                    <span>Dashboard</span>
                </Link>
      
                <Link href="/dashboard/students" className={cn("flex items-center p-4 hover:bg-red-sagara hover:text-white rounded-lg", path === "/dashboard/students" ? "text-white font-bold" : "text-text-inactive")}>
                    <img src="/static/icon-student.png" className="mr-4 w-5 h-5 text-white font-bold"></img>
                    <span>Students</span>
                </Link>

            </nav>

        </aside>
    </nav>

    );

}
export default Sidebar;