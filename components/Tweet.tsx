import React, { useEffect, useState } from 'react'
import { Comment, CommentBody, Like, Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import { ChatBubbleOvalLeftIcon, HeartIcon, ArrowPathRoundedSquareIcon, ArrowUpTrayIcon, Bars3CenterLeftIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { fetchComments } from '../utils/fetchComments'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { faker } from '@faker-js/faker';
interface Props {
    tweet: Tweet
}
function Tweet({ tweet }: Props) {

    const [commentBoxOpen, setCommentBoxOpen] = useState<boolean>(false);
    const [input, setInput] = useState<string>('')
    const [comments, setComments] = useState<Comment[]>([])

    const { data: session } = useSession()

    const letters = ['K', 'M'];
    const randomIndex = faker.datatype.number({ min: 0, max: 1 });
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
        setCommentBoxOpen(false);
        refreshComments()

    }
    return (
        <div className="flex flex-col space-x-3 border-t border-gray-100 p-5">
            <div className="flex space-x-3">
                <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={tweet.profileImg}
                    alt={tweet._id}
                />


                <div className='w-full'>
                    <div className="flex items-center space-x-1">
                        <a className='flex items-center'>
                            <p className="mr-1 font-bold hover:underline">{tweet.username}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="fill-twitter w-5 h-5"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg>
                        </a>

                        <p className="hidden text-sm text-gray-500 sm:inline">
                            @{tweet.username.replace(/\s+/g, '').toLowerCase()} ·
                        </p>
                        <TimeAgo
                            className="text-sm text-gray-500"
                            date={tweet._createdAt}
                        />
                        <div className='flex-1'>
                            <a
                                className="text-2xl rounded-full text-[#70767B] hover:text-twitter float-right hover:border-twitter hover:border hover:bg-twitter/20 ml-auto"
                            >
                                <EllipsisHorizontalIcon className='h-5' />
                            </a>
                        </div>
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
                    onClick={() => setCommentBoxOpen(!commentBoxOpen)}
                    // onClick={() => setCommentBoxVisible(!commentBoxVisible)}
                    className="flex cursor-pointer items-center space-x-3 text-gray-500 hover:text-twitter">
                    <ChatBubbleOvalLeftIcon className="h-5 w-5 " />
                    <p>{comments.length}</p>
                </div>

                <div className="flex cursor-pointer items-center space-x-3 text-gray-500 hover:text-[#01BA7C]">
                    <ArrowPathRoundedSquareIcon className="h-5 w-5" />
                    <p>
                        {parseFloat(faker.finance.amount(1, 20, 1))}{letters[randomIndex]}
                    </p>
                </div>

                <div className="flex cursor-pointer items-center space-x-3 text-gray-500 hover:text-[#DF1672]">
                    <HeartIcon className="h-5 w-5" />
                    <p>
                        {parseFloat(faker.finance.amount(1, 20, 1))}{letters[randomIndex]}
                    </p>
                </div>

                <div className="flex cursor-pointer items-center space-x-3 text-gray-500 hover:text-twitter">
                    <Bars3CenterLeftIcon className="h-5 w-5 -rotate-90" />
                    <p>
                        {parseFloat(faker.finance.amount(1, 20, 1))}{letters[randomIndex]}
                    </p>
                </div>

                <div className="flex cursor-pointer items-center space-x-3 text-gray-500 hover:text-twitter">
                    <ArrowUpTrayIcon className="h-5 w-5" />
                </div>
            </div>

            {/* Comment Box logic */}
            {commentBoxOpen && (
                <>
                    {session ? (
                        <form
                            className="mt-3 flex space-x-3">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 rounded-lg bg-gray-100 p-2 outline-none dark:bg-[#202326]"
                                type="text"
                                placeholder="Write a comment..."
                            />
                            <button
                                disabled={!input || !session}
                                type="submit"
                                onClick={handleSubmitComment}
                                className="text-twitter disabled:text-gray-200">
                                Post
                            </button>
                        </form>
                    ) : (
                        <div className="flex text-red-500 justify-center mt-4 mb-0 font-semibold">
                            <p>You Need To Sign In</p>
                        </div>
                    )}
                </>
            )}

            {/* Show comments */}
            {commentBoxOpen && (
                <>
                    {comments?.length > 0 && (
                        <div className="my-2 mt-5 max-h-44 space-y-5  border-t border-gray-100 p-5">
                            {comments.map((comment) => (
                                <div key={comment._id} className="flex space-x-2">
                                    <hr className="top-10 h-8 border-x border-twitter/30" />
                                    <img
                                        src={comment.profileImg}
                                        className="mt-2 h-7 w-7 rounded-full object-cover"
                                        alt=""
                                    />
                                    <div>
                                        <div className="flex items-center space-x-l">
                                            <p className="mr-1 font-bold">{comment.username}</p>
                                            <p className="hidden text-sm text-gray-500 lg:inline">
                                                @{comment.username.replace(/\s+/g, "")}.
                                            </p>
                                            <TimeAgo
                                                className="text-sm text-gray-500"
                                                date={comment._createdAt}
                                            />
                                        </div>
                                        <p>{comment.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Tweet