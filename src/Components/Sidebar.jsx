import { 
  Instagram, 
  Search, 
  Bell, 
  ChevronDown, 
  Home, 
  Compass, 
  Clapperboard, 
  Settings, 
  LogOut,
  PlusCircle
} from 'lucide-react';
import { currentUser } from '../data/mockData';

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Feed', active: true },
    { icon: Compass, label: 'Explore' },
    { icon: Clapperboard, label: 'Reels' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-full lg:w-72 bg-white lg:min-h-screen lg:fixed lg:left-0 lg:top-0 border-r border-gray-100 flex flex-col">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <Instagram className="w-6 h-6" />
          <span className="font-bold text-xl tracking-tight">Instagram</span>
        </div>
        <div className="flex items-center space-x-3">
          <Bell className="w-6 h-6 text-gray-700" />
          <ChevronDown className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      {/* Desktop Logo */}
      <div className="hidden lg:flex items-center px-6 py-8">
        <Instagram className="w-8 h-8 mr-3" />
        <span className="font-bold text-2xl tracking-tight">Instagram</span>
      </div>

      {/* Profile Section */}
      <div className="px-4 lg:px-6 py-4 lg:py-6">
        <div className="flex lg:flex-col items-center lg:space-y-3">
          <div className="relative">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.username}
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>
          <div className="ml-4 lg:ml-0 text-left lg:text-center">
            <h2 className="font-bold text-gray-900">{currentUser.username}</h2>
            <p className="text-sm text-gray-500">{currentUser.handle}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-6 mt-4 lg:mt-6 py-3 border-y border-gray-100">
          <div className="text-center">
            <p className="font-bold text-gray-900">{currentUser.posts}</p>
            <p className="text-xs text-gray-500">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-900">{currentUser.followers}</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-900">{currentUser.following}</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-600 mt-3 lg:text-center hidden lg:block">
          {currentUser.bio}
        </p>

        {/* Story Highlights */}
        <div className="mt-4 lg:mt-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 hidden lg:block">Story Highlights</h3>
          <div className="flex space-x-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            <div className="flex flex-col items-center min-w-[60px] cursor-pointer">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                <PlusCircle className="w-5 h-5 text-gray-400" />
              </div>
              <span className="text-xs text-gray-600 mt-1">New</span>
            </div>
            {currentUser.highlights.slice(1).map((highlight) => (
              <div key={highlight.id} className="flex flex-col items-center min-w-[60px] cursor-pointer">
                <img 
                  src={highlight.image} 
                  alt={highlight.name}
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <span className="text-xs text-gray-600 mt-1">{highlight.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex flex-col px-4 mt-2 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
              item.active 
                ? 'bg-gray-100 text-gray-900 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </a>
        ))}
        <a
          href="#"
          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors mt-4"
        >
          <LogOut size={22} />
          <span>Logout</span>
        </a>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-3 px-4 z-50">
        {navItems.slice(0, 3).map((item) => (
          <a key={item.label} href="#" className="text-gray-600">
            <item.icon size={24} />
          </a>
        ))}
        <a href="#" className="text-gray-600">
          <Settings size={24} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;