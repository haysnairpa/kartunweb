import React from 'react'

const Who = () => {
  return (
    <div >
      <section className="relative pt-20 pb-16 overflow-hidden bg-black sm:pt-60 sm:pb-20">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 lg:space-x-8">
            
            {/* Text Section */}
            <div className="max-w-2xl lg:w-1/2 text-center lg:text-left">
              <h1 className="mt-8 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                People Inside
              </h1>
              <p className="mt-6 text-lg font-normal text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut delectus voluptatum officia ducimus a vero. Ducimus et soluta voluptas excepturi.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl">
                <div className="absolute inset-0">
                  <svg
                    className="blur-3xl filter"
                    style={{ filter: "blur(64px)" }}
                    width="645"
                    height="413"
                    viewBox="0 0 645 413"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                      fill="url(#d)"
                    />
                    <defs>
                      <linearGradient
                        id="d"
                        x1="665.741"
                        y1="178.506"
                        x2="296.286"
                        y2="474.62"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "var(--color-cyan-500)" }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "var(--color-purple-500)" }}
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <img
                  className="relative object-cover w-full h-full rounded-lg shadow-lg"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/4/dashboard-mockup.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Who
