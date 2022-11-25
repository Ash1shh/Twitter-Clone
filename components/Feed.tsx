import React from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import TweetBox from './TweetBox'
function Feed() {
    return (
        <div className="col-span-7 max-h-screen scrollbar-hide lg:col-span-5 border-x">
            
            {/* RefreshIcon */}
            <div className="flex items-center justify-between">
            <h1 className=" p-5 pb-0 text-xl font-bo ld">Home</h1>
            <ArrowPathIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer
            text-twitter transition-all duration-500 ease-out
            hover:rotate-180 active:scale-125" />
            </div>

            {/* Tweetbox */}
            <div>
                <TweetBox />
            </div>
        </div >
    )
}

export default Feed