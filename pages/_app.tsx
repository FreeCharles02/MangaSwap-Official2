import Layout from './layout'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { useEffect } from 'react'
import axios from 'axios'
export default function App({ 
  Component, pageProps:
  { session, ...pageProps},
 }: AppProps) {

  useEffect(() => {
    axios.get('api/auth/route')
      .then((response) => {
      //  console.log(response.data)
      })
  },[])
  return (
    <SessionProvider session={session}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}