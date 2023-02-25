import React from 'react'
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
function Widgets() {
    return (
        <div className="mt-2 px-4 hidden lg:inline col-span-2">
            {/* Search */}
            <div className="mt-2 flex items-center space-x-2
            rounded-full bg-gray-100 p-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input type= "text" 
                placeholder="Search Twitter" 
                className="flex-1 outline-none bg-transparent"
                />
            </div>

            {/* Twitter embed */}
            <div className="p-1 mt-2">
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="pluto0p"
                options={{ height: 1000 }}/>
            </div>
        </div>
    )
}

export default Widgets