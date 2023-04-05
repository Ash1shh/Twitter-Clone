import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import {
    CalendarIcon,
    FaceSmileIcon,
    MapPinIcon,
    PhotoIcon,
    MagnifyingGlassCircleIcon
} from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { Tweet, TweetBody } from '../typings';
import { fetchTweets } from '../utils/fetchTweets';
import toast from 'react-hot-toast';

interface Props {
    setTweets: Dispatch<SetStateAction<Tweet[]>>
}

function TweetBox({ setTweets }: Props) {
    const { data: session } = useSession()
    const [input, setInput] = useState<string>('')
    const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)
    const imageInputRef = useRef<HTMLInputElement>(null)
    const [image, setImage] = useState<string>('')

    const addImageToTweet = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();

        if (!imageInputRef.current?.value) return;

        setImage(imageInputRef.current.value);
        imageInputRef.current.value = '';
        setImageUrlBoxIsOpen(false);
    }
    const postTweet = async () => {
        const tweetInfo: TweetBody = {
            text: input,
            username: session?.user?.name || 'Unknown User',
            profileImg: session?.user?.image || 'https://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face.jpeg',
            image: image
        }

        const result = await fetch(`/api/addTweet`, {
            body: JSON.stringify(tweetInfo),
            method: 'POST'
        })

        const json = await result.json()

        const newTweets = await fetchTweets()
        setTweets(newTweets)

        toast('Tweet Posted!', {
            icon: '🎉',
        })

        return json
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        postTweet();
        setInput('')
        setImage('')
        setImageUrlBoxIsOpen(false)
    }

    return (
        <div className="flex space-x-2 p-5">
            <img className="h-14 w-14 mt-4 rounded-full object-cover" src={session?.user?.image || "https://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face.jpeg"} alt="" />

            <div className="flex flex-1 items-center pl-2">
                <form className="flex flex-1 flex-col">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="What's happening?"
                        className="h-24 w-full text-xl outline-none placeholder:text-xl dark:bg-[#050505]" />

                    {/* Icons */}
                    <div className="flex items-center">
                        <div className="flex flex-1 space-x-2 text-twitter">
                            <PhotoIcon onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)} className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                            <MagnifyingGlassCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                            <FaceSmileIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                            <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                            <MapPinIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                        </div>
                        <button
                            onClick={handleSubmit}
                            //disabled={!input}
                            disabled={!input || !session}
                            className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40">Tweet
                        </button>
                    </div>
                    {/* Image adding form  */}
                    {imageUrlBoxIsOpen && (
                        <form className="rounded-lg mt-5 flex bg-twitter/70 py-2 px-4">
                            <input
                                ref={imageInputRef}
                                type="text"
                                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                                placeholder="Enter Image URL..."
                            />
                            <button type="submit" onClick={addImageToTweet} className="font-bold text-white">Add Image</button>
                        </form>
                    )}

                    {/* Image show after adding */}
                    {image && (
                        <img
                            className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
                            src={image}
                            alt=""
                        />
                    )}
                </form>
            </div>
        </div>
    )
}

export default TweetBox
