import Layout from './layout'
import { store } from '../pages/store'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import 'tailwindcss/index.css'
export default function App({ 
  Component, pageProps:
  { session, ...pageProps},
 }: AppProps) {
 useEffect(() => {
   // Test the database connection on app load
       axios.get('/api/route');  
    }, []);
  
  
  return (
    <Provider store={store}>
    <SessionProvider session={session}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </SessionProvider>
    </Provider>
  )
}