import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import { Toaster } from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}


const Home = ({ tweets }: Props) => {
  //console.log(tweets) 

  return (
    <div className="dark:bg-black/70 h-screen overflow-hidden">
      <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
        <Head>
          <title>Twitter Clone</title>
          <link rel="icon" href="https://imgs.search.brave.com/yA3nvunvkQeysiPRFk8qDlRryft2RXyI7AocZDiXwWg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY5MTgzMjQ2/MHgtdHdpdHRlci1s/b2dvLXBuZy5wbmc" />
        </Head>
        <Toaster />
        <main className="grid grid-cols-9 ">

          <Sidebar />

          <Feed tweets={tweets} />

          <Widgets />

        </main>
      </div>
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async () => {
  const tweets = await fetchTweets()

  return {
    props: {
      tweets,
    }
  }
}

