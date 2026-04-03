import Stories from './Components/Stories';
import Feed from './Components/Feed';
import { Search, Bell, ChevronDown, Plus } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <div className="lg:ml-72">
        {/* Header - Desktop */}
        <header className="hidden lg:flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-40 border-b border-gray-100">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center space-x-1 p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronDown className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-instagram-orange to-instagram-pink text-white px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-pink-200">
              <Plus className="w-4 h-4" />
              <span>Create a post</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 lg:px-8 py-4 lg:py-6 max-w-7xl mx-auto">
          <Stories />
          <Feed />
        </main>
      </div>
    </div>
  );
}

export default App;