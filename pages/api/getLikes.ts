import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Like } from '../../typings'


const likeQuery = groq`
  *[_type == 'like' && references(*[_type=='tweet' && _id==$tweetId]._id)]{
        _id,
        ...
    } | order(_createdAt desc)
`
type Data = Like[]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { tweetId } = req.body
    const like: Like[] = await sanityClient.fetch(likeQuery, {
        tweetId,
    })

    res.status(200).json(like)
}