import React, { useState } from "react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="/" title="" className="flex">
                <img
                  className="w-auto h-9"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white "
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <nav className="hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12">
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                People Inside
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                What we do?
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Activities
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {/* it will be a dropdown menu */}
                Other 
              </a>
            </nav>

            
          </div>

          {expanded && (
            <nav>
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a
                  href="#"
                  title=""
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  People Inside
                </a>
                <a
                  href="#"
                  title=""
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  What we do?
                </a>
                <a
                  href="#"
                  title=""
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Activities
                </a>
                <a
                  href="#"
                  title=""
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Other
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
