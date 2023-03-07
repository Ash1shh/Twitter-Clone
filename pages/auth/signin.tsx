// import React from 'react';
// import { getProviders, signIn as SignIntoProvider, ClientSafeProvider } from 'next-auth/react';
// import { InferGetServerSidePropsType } from 'next';
// import Head from 'next/head';

// function signIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//     return (
//         <>
//             <Head>
//                 <title>Twitter Clone</title>
//                 <link rel="icon" href="https://i0.wp.com/edinburghuniform.org/wp-content/uploads/2019/11/twitter-logo-png-twitter-logo-vector-png-clipart-library-518.png?fit=518%2C518&ssl=1" />
//             </Head>
//             <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center pt-60">
//                 <img
//                     //className="h-120"
//                     style={{ height: "400px" }}
//                     src="https://cutewallpaper.org/24/logo-de-twitter-png/logotipo-twitter-en-png-y-vector-ai-descarga-el-logo-de-twitter.png"
//                     alt=""
//                 />
//                 <p className="font-xs italic">
//                     This is not a Real app, it is build for educational purpose only
//                 </p>
//                 <div className='mt-40'>
//                     {providers && Object.values(providers).map((provider) => (
//                         <div key={provider.name}>
//                             <button className="p-3 bg-twitter rounded-lg text-white" onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}>
//                                 Sign in with {provider.name}
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

// export async function getServerSideProps() {
//     const providers = await getProviders();
//     return {
//         props: {
//             providers,
//         },
//     }
// }

// export default signIn;
