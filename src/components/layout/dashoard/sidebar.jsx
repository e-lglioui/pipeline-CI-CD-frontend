import { useState } from 'react';
import { LayoutDashboard, Users, MessageCircleHeart, Settings, Menu } from 'lucide-react';
import { SidebarNav } from './sidebar-nav';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: MessageCircleHeart, label: 'Reviews', path: '/reviews' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(menuItems[0].path);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div className={`h-screen bg-green-700 text-white p-4 flex flex-col transition-width duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center gap-3 px-2 py-4">
        <button onClick={toggleSidebar}>
          <Menu className="h-6 w-6 mt-1 cursor-pointer" />
        </button>
        {isSidebarOpen && <span className="text-xl flex items-center font-bold">You Pharmacy</span>}
      </div>
      <SidebarNav items={menuItems} isOpen={isSidebarOpen} activeItem={activeItem} onItemClick={handleItemClick} />
    </div>
  );
}