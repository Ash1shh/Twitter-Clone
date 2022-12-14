import React, { useEffect, useState } from 'react'
import { Comment, CommentBody, Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import { ChatBubbleLeftRightIcon, HeartIcon, ArrowsRightLeftIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { fetchComments } from '../utils/fetchComments'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'
interface Props {
    tweet: Tweet
}
function Tweet({ tweet }: Props) {

    const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(false)
    const [input, setInput] = useState<string>('')
    const [comments, setComments] = useState<Comment[]>([])
    const { data: session } = useSession()

    const refreshComments = async () => {
        const Comments: Comment[] = await fetchComments(tweet._id)
        setComments(Comments)
    }

    useEffect(() => {
        refreshComments()
    }, [])

    console.log(comments)

    const handleSubmitComment = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        const commentToast = toast.loading('Posting Comment...')

        // Comment logic
        const comment: CommentBody = {
            comment: input,
            tweetId: tweet._id,
            username: session?.user?.name || 'Unknown User',
            profileImg: session?.user?.image || 'https://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face.jpeg',
        }

        const result = await fetch(`/api/addComment`, {
            body: JSON.stringify(comment),
            method: 'POST',
        })

        console.log('WOOHOO we made it', result)
        toast.success('Comment Posted!', {
            id: commentToast,
        })

        setInput('')
        setCommentBoxVisible(false)
        refreshComments()
    }

    return (
        <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
            <div className="flex space-x-3">
                <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={tweet.profileImg}
                    alt={tweet._id}
                />


                <div>
                    <div className="flex items-center space-x-1">
                        <p className="mr-1 font-bold">{tweet.username}</p>
                        <p className="hidden text-sm text-gray-500 sm:inline">
                            @{tweet.username.replace(/\s+/g, '').toLowerCase()} ??
                        </p>
                        <TimeAgo
                            className="text-sm text-gray-500"
                            date={tweet._createdAt}
                        />
                    </div>
                    <p className="pt-1">{tweet.text}</p>

                    {tweet.image && (
                        <img
                            className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
                            src={tweet.image}
                            alt="111"
                        />
                    )}
                </div>
            </div>

            <div className="flex justify-between mt-5">
                <div
                    onClick={ () => session && setCommentBoxVisible(!commentBoxVisible)}
                    // onClick={() => setCommentBoxVisible(!commentBoxVisible)}
                    className="flex cursor-pointer items-center space-x-3 text-gray-500">
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    <p>{comments.length}</p>
                </div>

                <div className="flex cursor-pointer items-center space-x-3 text-gray-500">
                    <HeartIcon className="h-5 w-5" />
                </div>

                <div className="flex cursor-pointer items-center space-x-3 text-gray-500">
                    <ArrowsRightLeftIcon className="h-5 w-5" />
                </div>

                <div className="flex cursor-pointer items-center space-x-3 text-gray-500">
                    <ArrowUpTrayIcon className="h-5 w-5" />
                </div>
            </div>


            {/* Comment Box logic */}
            {commentBoxVisible && (
                <form
                    className="mt-3 flex space-x-3">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 rounded-lg bg-gray-100 p-2 outline-none"
                        type="text"
                        placeholder="Write a comment..."
                    />
                    <button disabled={!input}
                        type="submit"
                        onClick={handleSubmitComment}
                        className="text-twitter disabled:text-gray-200">
                        Post
                    </button>
                </form>
            )}

            {/* Show comments */}
            {comments?.length > 0 && (
                <div className="my-2 mt-5 max-h-44 space-y-5  border-t border-gray-100 p-5">
                    {comments.map((comment) => (
                        <div key={comment._id} className="relative flex space-x-2">
                            <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
                            <img
                                src={comment.profileImg}
                                className="h-7 w-7 rounded-full object-cover"
                                alt=""
                            />
                            <div>
                                <div className="flex items-center space-x-1">
                                    <p className="mr-1 font-bold">{comment.username}</p>
                                    <p className="hidden text-sm text-gray-500 lg:inline">
                                        @{comment.username.replace(/\s+/g, '').toLowerCase()} ??
                                    </p>
                                    <TimeAgo
                                        className="text-sm text-gray-500"
                                        date={comment._createdAt}
                                    />
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            )}

        </div>
    )
}

export default Tweet