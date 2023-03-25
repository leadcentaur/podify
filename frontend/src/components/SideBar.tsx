import React, {useState, useRef, useEffect} from "react"


interface SideBarProps {
  childComp?: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = (props): JSX.Element => {

    const { childComp } = props;

    return (
      <div className="relative min-h-screen md:flex">
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <a href="#" className="block p-4 text-white font-bold">Podify</a>
    
  
        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
          </svg>
        </button>
      </div>
    

      <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">


    <a href="#" className="text-white flex items-center space-x-2 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      <span className="text-2xl font-extrabold">Podify</span>
    </a>


    <nav>
      <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Home
      </a>
      <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        About
      </a>
      <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Features
      </a>
      <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Pricing
      </a>
    </nav>
  </div>

      <div className="flex-1 p-10 text-2xl font-bold">
        {childComp}
      </div>
    
    </div>
  );
}

export default SideBar;