import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import jwt_decode from "jwt-decode";
import {useState,useEffect} from "react";
import NoAccessLoader from "../components/NoAccessLoader";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<Object | null>(null);
  
  useEffect(() => {
    // Get token from jwt cookie
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (token) {
      const decoded : Object = jwt_decode(token);
      setUser(decoded);
      console.log(decoded);
    }
  }, []);




  // User is Logged in
  if(user){
    return (
      <Layout >
        <Component {...pageProps} />
      </Layout>
    )
  }
  // User is not logged in
  else{
    return (
      <NoAccessLoader />
    )

  }
  
}


export default MyApp
