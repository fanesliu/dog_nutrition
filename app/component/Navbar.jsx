import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto h-28 w-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4 text-black ml-32">
          <Link href="/recipes" legacyBehavior>
            <a className="mr-16">Recipes</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
        </div>
        {/* Center Section */}
        <div className="text-black font-bold text-2xl relative z-10 flex justify-center flex-1 lg:ml-44 mt-24">
          <Link href="/" legacyBehavior>
            <a>
              <img src="/images/logo.png" alt="Logo" className="h-auto w-2/3" />
            </a>
          </Link>
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-4 text-black mr-32 justify-center">
          <Link href="/support"  legacyBehavior>
            <a className="mr-16">Support</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a>Login</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
