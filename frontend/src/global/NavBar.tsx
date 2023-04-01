import React from "react";

const navConfig = [
    {
        label: 'Home',
        to: 'https://github.com/moonrepo/moon'
    },
    {
        label: 'Features',
        to: ''
    }
]

export default function NavBar() {
    return (

<header className="bg-white shadow-lg h-24 hidden md:flex">
  <a href="" className="flex-shrink-0 flex items-center justify-center px-7 lg:px-6 xl:px-8">
    <img className="" src="https://i.imgur.com/Opl2DQu.jpeg" alt="" />
  </a>
  <nav className="header-links contents lg:text-lg">
    <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
      <li className="p-3 xl:p-6 active">
      </li>
      <li className="p-3 xl:p-6">
        <a href="">
          <span>Home</span>
        </a>
      </li>
      <li className="p-3 xl:p-6">
        <a href="">
          <span>About</span>
        </a>
      </li>

      <li className="p-3 xl:p-6">
        <a href="" className="flex items-center">
          <span>Pages</span>
          <svg className="h-3 opacity-30 ml-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg>
        </a>
      </li>
    </ul>
  </nav>
  <div className="flex items-center px-4 lg:px-6 xl:px-8">
    <a href="" className="mr-4 lg:mr-6 xl:mr-8">
      <svg className="h-6 xl:h-8 svg-inline--fa fa-search fa-w-16 fa-3x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
    </a>
    <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Contact Me</button>
  </div>
</header>
    );
}