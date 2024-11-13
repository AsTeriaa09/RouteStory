"use client";
import Link from "next/link";
import Links from "./links/Links";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // temporary logic
  const isUser = true;
  const isAdmin = true;

  return (
    <>
      <nav className="bg-inherit border-white border-b-2 py-0.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white text-3xl">
                  RouteStory
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center text-lg space-x-5">
                <Link
                  href="/"
                  className="text-white hover:rounded-lg py-1 px-2 hover:bg-gray-800"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:rounded-lg py-1 px-2 hover:bg-gray-800"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-white hover:rounded-lg py-1 px-2 hover:bg-gray-800"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:rounded-lg py-1 px-2 hover:bg-gray-800"
                >
                  Contact
                </Link>

                {isUser && isAdmin ? (
                  <>
                    <Link
                      href="/admin"
                      className="text-white hover:rounded-lg py-1 px-2 hover:bg-gray-800"
                    >
                      Admin
                    </Link>
                  </>
                ) : (
                  ""
                )}

                {isUser ? (
                  <>
                    <Link
                      href="/logout"
                      className="text-white text-lg hover:rounded-lg py-1 px-2 hover:bg-gray-800"
                    >
                      <button>Logout</button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-white text-lg hover:rounded-lg py-1 px-2 hover:bg-gray-800"
                    >
                      <button>Login</button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              <Link href="/" className="text-white block hover:rounded-lg py-1 px-2 hover:bg-gray-800">
                Home
              </Link>
              <Link href="/about" className="text-white block hover:rounded-lg py-1 px-2 hover:bg-gray-800">
                About
              </Link>
              <Link href="/blog" className="text-white block hover:rounded-lg py-1 px-2 hover:bg-gray-800">
                Blog
              </Link>
              <Link href="/contact" className="text-white block hover:rounded-lg py-1 px-2 hover:bg-gray-800">
                Contact
              </Link>
              {isUser && isAdmin ? (
                <>
                  <Link
                    href="/admin"
                    className="text-white block hover:rounded-lg py-1 px-2 hover:bg-gray-800"
                  >
                    <button>Admin</button>
                  </Link>
                </>
              ) : (
                ""
              )}
              {isUser ? (
                <>
                  <Link
                    href="/logout"
                    className="text-white block text-lg hover:rounded-lg py-1 px-2 hover:bg-gray-800"
                  >
                    <button>Logout</button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-white block text-lg hover:rounded-lg py-1 px-2 hover:bg-gray-800"
                  >
                    <button>Login</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
