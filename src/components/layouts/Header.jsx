// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { 
//   Home, 
//   Users, 
//   Briefcase, 
//   MessageSquare, 
//   Bell, 
//   Search,
//   Menu,
//   X
// } from "lucide-react";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const navItems = [
//     { icon: Home, label: "Home", path: "/" },
//     { icon: Users, label: "My Network", path: "/network" },
//     { icon: Briefcase, label: "Jobs", path: "/jobs" },
//     { icon: MessageSquare, label: "Messaging", path: "/messaging" },
//     { icon: Bell, label: "Notifications", path: "/notifications" },
//   ];

//   const isActive = (path) => {
//     if (path === "/") {
//       return location.pathname === "/";
//     }
//     return location.pathname.startsWith(path);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Handle search functionality
//     console.log("Search:", searchQuery);
//   };

//   return (
//     <header className="bg-white border-b border-gray-300 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-14">
//           {/* Left Section - Logo & Search */}
//           <div className="flex items-center gap-2">
//             {/* LinkedIn Logo */}
//             <Link to="/" className="flex-shrink-0">
//               <div className="w-9 h-9 bg-linkedin-blue rounded flex items-center justify-center text-white font-bold text-xl">
//                 in
//               </div>
//             </Link>

//             {/* Search Bar - Hidden on mobile */}
//             <form onSubmit={handleSearch} className="relative hidden md:block">
//               <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search"
//                 className="pl-10 pr-4 py-2 bg-[#edf3f8] rounded border-none outline-none w-64 text-sm focus:bg-white transition-colors"
//               />
//             </form>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex gap-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`flex flex-col items-center gap-1 px-3 py-2 hover:text-gray-900 transition-colors relative ${
//                   isActive(item.path)
//                     ? "text-gray-900"
//                     : "text-gray-600"
//                 }`}
//               >
//                 <item.icon className="w-6 h-6" />
//                 <span className="text-xs font-medium">{item.label}</span>
//                 {isActive(item.path) && (
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
//                 )}
//               </Link>
//             ))}
//           </nav>

//           {/* Profile Section */}
//           <div className="hidden md:flex items-center gap-2">
//             <Link
//               to="/profile"
//               className={`flex flex-col items-center gap-1 px-3 py-2 hover:text-gray-900 transition-colors relative ${
//                 location.pathname.startsWith("/profile")
//                   ? "text-gray-900"
//                   : "text-gray-600"
//               }`}
//             >
//               <div className="w-6 h-6 bg-gradient-to-br from-linkedin-blue to-linkedin-blue-dark rounded-full flex items-center justify-center text-white text-xs font-semibold">
//                 YN
//               </div>
//               <span className="text-xs font-medium">Me</span>
//               {location.pathname.startsWith("/profile") && (
//                 <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setShowMobileMenu(!showMobileMenu)}
//             className="md:hidden p-2 text-gray-600 hover:text-gray-900"
//           >
//             {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {showMobileMenu && (
//           <div className="md:hidden pb-4 border-t border-gray-200 mt-2">
//             {/* Mobile Search */}
//             <form onSubmit={handleSearch} className="relative my-3">
//               <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search"
//                 className="pl-10 pr-4 py-2 bg-[#edf3f8] rounded border-none outline-none w-full text-sm"
//               />
//             </form>

//             {/* Mobile Nav Items */}
//             <div className="space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setShowMobileMenu(false)}
//                   className={`flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-100 transition-colors ${
//                     isActive(item.path)
//                       ? "bg-gray-100 text-gray-900"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   <item.icon className="w-5 h-5" />
//                   <span className="font-medium">{item.label}</span>
//                 </Link>
//               ))}
//               <Link
//                 to="/profile"
//                 onClick={() => setShowMobileMenu(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-100 transition-colors ${
//                   location.pathname.startsWith("/profile")
//                     ? "bg-gray-100 text-gray-900"
//                     : "text-gray-600"
//                 }`}
//               >
//                 <div className="w-5 h-5 bg-gradient-to-br from-linkedin-blue to-linkedin-blue-dark rounded-full flex items-center justify-center text-white text-xs font-semibold">
//                   YN
//                 </div>
//                 <span className="font-medium">Profile</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  Search,
  Menu,
  X,
  Sparkles,
  TrendingUp
} from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Users, label: "Network", path: "/network" },
    { icon: Briefcase, label: "Jobs", path: "/jobs" },
    { icon: TrendingUp, label: "Sales", path: "/sales-navigator" },
    { icon: MessageSquare, label: "Messages", path: "/messaging" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", searchQuery);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo & Search */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="hidden md:block text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                ProNet
              </span>
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search professionals, jobs..."
                className="pl-11 pr-4 py-2.5 bg-gray-100 rounded-xl border-none outline-none w-80 text-sm focus:bg-white focus:ring-2 focus:ring-primary-200 transition-all"
              />
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all relative group ${isActive(item.path)
                  ? "text-primary-600"
                  : "text-gray-600"
                  }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Profile Section */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/profile"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-all ${location.pathname.startsWith("/profile")
                ? "bg-primary-50"
                : ""
                }`}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                YN
              </div>
              <div className="text-left">
                <p className="text-xs font-medium text-gray-900">Me</p>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2 animate-fadeIn">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative my-3">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pl-11 pr-4 py-2.5 bg-gray-100 rounded-xl border-none outline-none w-full text-sm"
              />
            </form>

            {/* Mobile Nav Items */}
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMobileMenu(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors ${isActive(item.path)
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-600"
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              <Link
                to="/profile"
                onClick={() => setShowMobileMenu(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors ${location.pathname.startsWith("/profile")
                  ? "bg-primary-50 text-primary-600"
                  : "text-gray-600"
                  }`}
              >
                <div className="w-5 h-5 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  YN
                </div>
                <span className="font-medium">Profile</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;