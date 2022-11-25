import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="https://i0.wp.com/edinburghuniform.org/wp-content/uploads/2019/11/twitter-logo-png-twitter-logo-vector-png-clipart-library-518.png?fit=518%2C518&ssl=1" />
      </Head>
      <main className="grid grid-cols-9">
      
      <Sidebar />

      <Feed />

      <Widgets />

      </main>
    </div>
  )
}

export default Home
