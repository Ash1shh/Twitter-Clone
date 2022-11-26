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
tweets: Tweet []
}


const Home = ({ tweets }: Props) => {
  //console.log(tweets) 
  
  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="https://i0.wp.com/edinburghuniform.org/wp-content/uploads/2019/11/twitter-logo-png-twitter-logo-vector-png-clipart-library-518.png?fit=518%2C518&ssl=1" />
      </Head>
      <Toaster />
      <main className="grid grid-cols-9">
      
      <Sidebar />

      <Feed tweets= {tweets}/>

      <Widgets />

      </main>
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

