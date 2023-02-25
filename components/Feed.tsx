import React, { useState } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import TweetBox from './TweetBox'
import TweetComponent from '../components/Tweet'
import { Tweet } from '../typings'
import toast from 'react-hot-toast'
import { fetchTweets } from '../utils/fetchTweets'
interface Props {
    tweets: Tweet[]
}
function Feed({ tweets: TweetsProp }: Props) {
    const [tweets, setTweets] = useState<Tweet[]>(TweetsProp)
    //console.log(tweets)

    // submit refresh button
    const handleRefresh = async () => {
        const refreshToast = toast.loading('Refreshing...')

        const tweets = await fetchTweets()
        setTweets(tweets)

        toast.success('Feed Updated!', {
            id: refreshToast,
        })
    }

    return (
        <div className="col-span-7 max-h-screen overflow-scroll scrollbar-hide lg:col-span-5 border-x">

            {/* RefreshIcon */}
            <div className="flex items-center justify-between">
                <h1 className=" p-5 pb-0 text-xl font-bo ld">Home</h1>
                <ArrowPathIcon onClick={handleRefresh} className="mr-5 mt-5 h-8 w-8 cursor-pointer
            text-twitter transition-all duration-500 ease-out
            hover:rotate-180 active:scale-125" />
            </div>
            <hr className="mt-4 border-0.5 border-gray-300" />

            {/* Tweetbox */}
            <div>
                <TweetBox setTweets={setTweets} />
            </div>
            <hr className="border-0.5 border-gray-300" />

            {/* Feed */}
            <div>
                {tweets.map(tweet => (
                    <>
                    <TweetComponent key={tweet._id} tweet={tweet} />
                    <hr className="border-0.5 border-gray-400/60" />
                    </>
                ))}
            </div>
        </div>
    )
}

export default Feed