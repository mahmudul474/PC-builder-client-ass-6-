import Image from "next/image";
import  logo from "../../../assates/logo.png";

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-300 p-4 list-none">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <li className="text-black  text-2xl font-bold">
            <Image width={100}  height={200} className="h-[70px] object-cover w-full" src={logo} alt="Logo"/>
          </li>
        </Link>

        <div className="lg:hidden ">
          {/* Hamburger Icon for Mobile View */}
          <button
            type="button"
            className="text-black  focus:outline-none"
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
            <li className="text-black ">PC Builder</li>
          </Link>
          <Link href="/category/cpu-processor">
            <li className="text-black ">CPU / Processor</li>
          </Link>
          <Link href="/category/motherboard">
            <li className="text-black ">Motherboard</li>
          </Link>
          <Link href="/category/ram">
            <li className="text-black ">RAM</li>
          </Link>
          <Link href="/category/power-supply-unit">
            <li className="text-black ">Power Supply Unit</li>
          </Link>
          <Link href="/category/storage-device">
            <loi className="text-black ">Storage Device</loi>
          </Link>
          <Link href="/category/monitor">
            <li className="text-black ">Monitor</li>
          </Link>
          <Link href="/category/others">
            <li className="text-black ">Others</li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
