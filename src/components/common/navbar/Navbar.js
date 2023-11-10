 // components/common/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <li className="text-white text-2xl font-bold">Your Logo</li>
        </Link>

        <div className="lg:hidden">
          {/* Hamburger Icon for Mobile View */}
          <button
            type="button"
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-4">
          <Link href="/pc-builder">
            <li className="text-white">PC Builder</li>
          </Link>
          <Link href="/category/cpu-processor">
            <li className="text-white">CPU / Processor</li>
          </Link>
          <Link href="/category/motherboard">
            <li className="text-white">Motherboard</li>
          </Link>
          <Link href="/category/ram">
            <li className="text-white">RAM</li>
          </Link>
          <Link href="/category/power-supply-unit">
            <li className="text-white">Power Supply Unit</li>
          </Link>
          <Link href="/category/storage-device">
            <loi className="text-white">Storage Device</loi>
          </Link>
          <Link href="/category/monitor">
            <li className="text-white">Monitor</li>
          </Link>
          <Link href="/category/others">
            <li className="text-white">Others</li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
