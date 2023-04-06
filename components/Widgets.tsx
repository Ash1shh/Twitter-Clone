import React from 'react'
import {
    EllipsisHorizontalIcon
} from "@heroicons/react/24/outline";

function Widgets() {
    return (
        <div style={{ maxWidth: "350px" }}>
            <div className="overflow-y-auto fixed h-screen scrollbar-hide">
                {/* Search */}
                <div className="relative text-[#5E6368] p-6">
                    <button type="submit" className="absolute ml-4 mt-3 mr-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 items-center"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>

                    <input
                        type="search"
                        name="search"
                        placeholder="Search Twitter"
                        className="h-10 px-12 w-full rounded-full text-base focus:outline-none text-whitefont-bold shadow dark:bg-[#202326] text-gray-200 focus:ring-twitter focus:border-twitter focus:border"
                    />
                </div>

                <div className="max-w-sm rounded-2xl overflow-hidden m-4 -mt-2 hover:shadow-md dark:bg-[#17191C]">
                    <div className="flex">
                        <div className="flex-1 m-2">
                            <h2 className="px-4 py-2 text-xl font-bold text-gray-700 dark:text-gray-200">
                                What's happening
                            </h2>
                        </div>
                    </div>

                    <div className="flex dark:hover:bg-[#202326]">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 text-sm text-gray-500 dark:text-[#70767B]">
                                Trending in India
                            </p>
                            <h2 className="px-4 ml-2 font-bold text-gray-500 dark:text-gray-200">
                                #KGF-2
                            </h2>
                            <p className="px-4 ml-2 mb-3 text-sm text-gray-500 dark:text-[#70767B]">
                                1.5m Tweets
                            </p>
                        </div>
                        <div className="px-4 py-2 m-2">
                            <a
                                className="text-2xl rounded-full text-[#70767B] hover:text-twitter float-right hover:border-twitter hover:border hover:bg-twitter/20"
                            >
                                <EllipsisHorizontalIcon className='h-5' />
                            </a>
                        </div>
                    </div>

                    <div className="flex dark:hover:bg-[#202326]">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 text-sm text-gray-500 dark:text-[#70767B]">
                                Entertainment · Trending
                            </p>
                            <h2 className="px-4 ml-2 font-bold text-gray-500 dark:text-gray-200">
                                #Salaar
                            </h2>
                            <p className="px-4 ml-2 mb-3 text-sm text-gray-500 dark:text-[#70767B]">
                                1.8m Tweets
                            </p>
                        </div>
                        <div className="px-4 py-2 m-2">
                            <a
                                className="text-2xl rounded-full text-[#70767B] hover:text-twitter float-right hover:border-twitter hover:border hover:bg-twitter/20"
                            >
                                <EllipsisHorizontalIcon className='h-5' />
                            </a>
                        </div>
                    </div>

                    <div className="flex dark:hover:bg-[#202326]">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 text-sm text-gray-500 dark:text-[#70767B]">
                                Trending in Hyderabad
                            </p>
                            <h2 className="px-4 ml-2 font-bold text-gray-500 dark:text-gray-200">
                                #CBIT
                            </h2>
                            <p className="px-4 ml-2 mb-3 text-sm text-gray-500 dark:text-[#70767B]">
                                20k Tweets
                            </p>
                        </div>
                        <div className="px-4 py-2 m-2">
                            <a
                                className="text-2xl rounded-full text-[#70767B] hover:text-twitter float-right hover:border-twitter hover:border hover:bg-twitter/20"
                            >
                                <EllipsisHorizontalIcon className='h-5' />
                            </a>
                        </div>
                    </div>

                    <div className="flex dark:hover:bg-[#202326]">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 text-sm text-gray-500 dark:text-[#70767B]">
                                business & finance · Trending
                            </p>
                            <h2 className="px-4 ml-2 font-bold text-gray-500 dark:text-gray-200">
                                #IPFS
                            </h2>
                            <p className="px-4 ml-2 mb-3 text-sm text-gray-500 dark:text-[#70767B]">
                                1.5k Tweets
                            </p>
                        </div>
                        <div className="px-4 py-2 m-2">
                            <a
                                className="text-2xl rounded-full text-[#70767B] hover:text-twitter float-right hover:border-twitter hover:border hover:bg-twitter/20"
                            >
                                <EllipsisHorizontalIcon className='h-5' />
                            </a>
                        </div>
                    </div>

                    <div className="flex dark:hover:bg-[#202326]">
                        <div className="flex-1 p-4">
                            <h2 className="pl-2 pr-4 w-48 font-extralight text-lg text-twitter cursor-pointer">
                                Show more
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm rounded-2xl bg-dim-700 overflow-hidden m-4 hover:shadow-md dark:bg-[#17191C]">
                    <div className="flex">
                        <div className="flex-1 m-2">
                            <h2 className="px-4 py-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                                Who to follow
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-shrink-0 dark:hover:bg-[#202326]">
                        <div className="flex-1">
                            <div className="flex items-center w-48">
                                <div>
                                    <img
                                        className="inline-block h-10 w-auto ml-4 mt-3"
                                        src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                                        alt="sol"
                                    />
                                </div>
                                <div className="ml-3 mt-3">
                                    <p className="text-base leading-6 font-medium text-gray-700 dark:text-gray-200 hover:underline">
                                        Solano
                                    </p>
                                    <p className="text-sm leading-5 font-medium text-[#70767B] group-hover:text-gray-300 transition ease-in-out duration-150">
                                        {"@"}
                                        solano
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-2 m-2">
                            <a href="" className="float-right">
                                <button className="bg-black text-white font-semibold py-1 px-4 rounded-full dark:text-black dark:bg-white">
                                    Follow
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-shrink-0 dark:hover:bg-[#202326]">
                        <div className="flex-1">
                            <div className="flex items-center w-48">
                                <div>
                                    <img
                                        className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                                        src="https://user-images.githubusercontent.com/87669361/205507193-155e23c6-d7e7-4d7e-bc0f-793c42fa9c36.jpg"
                                        alt="pluto"
                                    />
                                </div>
                                <div className="ml-3 mt-3">
                                    <p className="text-base leading-6 font-medium text-gray-800 dark:text-gray-200 hover:underline">
                                        Pluto0p
                                    </p>
                                    <p className="text-sm leading-5 font-medium text-[#70767B] group-hover:text-gray-300 transition ease-in-out duration-150">
                                        {"@"} pluto0p
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-2 m-2">
                            <a href="#" className="float-right">
                                <button className="bg-black text-white font-semibold py-1 px-4 rounded-full dark:text-black dark:bg-white">
                                    Follow
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex dark:hover:bg-[#202326]">
                        <div className="flex-1 p-4">
                            <h2 className="pl-2 pr-4 w-48 font-extralight text-lg text-twitter cursor-pointer ">
                                Show more
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="m-6 -mt-0">
                    <div className="flex space-x-4 w-72">
                        <a href="#">
                            <p className="w-max text-sm leading-6 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
                                Terms of services
                            </p>
                        </a>
                        <a href="#">
                            <p className="w-max text-sm leading-6 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
                                Privacy Policy
                            </p>
                        </a>
                        <a href="#">
                            <p className="w-max text-sm leading-6 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
                                Cookies Policy
                            </p>
                        </a>
                    </div>
                    
                    <div className="flex space-x-4 w-52">
                        <a href="#">
                            <p className="w-max text-sm leading-6 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
                                Accessbility
                            </p>
                        </a>
                        <a href="#">
                            <p className="w-max text-sm leading-6 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
                                Ads Info
                            </p>
                        </a>
                        <a href="#">
                            <p className="w-max text-sm leading-6 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
                                More
                            </p>
                        </a>
                        <a href="#">
                            <p className="w-max text-sm leading-6 font-medium text-gray-500 dark:text-[#70767B]">
                                ···
                            </p>
                        </a>
                    </div>

                    <div className="">
                        <p className="text-sm leading-6 font-medium text-gray-600 dark:text-[#70767B]">
                            © 2023 Twitter, Inc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widgets