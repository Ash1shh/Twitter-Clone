// type definition file
//type
export interface Tweet extends TweetBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean
}

export type TweetBody = {
    text: string,
    username: string,
    profileImg: string,
    image?: string
}

export interface Comment extends CommentBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'comment'
    tweet: {
        _ref: string,
        _type: 'reference'
    }
}

export type CommentBody = {
    comment: string
    tweetId: string
    username: string
    profileImg: string
}

export interface Like extends LikeBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'like'
    tweet: {
        _ref: string,
        _type: 'reference'
    }
}

export type LikeBody = {
    isLiked: boolean
    tweetId: string
    username: string
    profileImg: string
}

