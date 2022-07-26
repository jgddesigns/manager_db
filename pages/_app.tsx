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
    // fetch from api/current-user
    fetch("/ManagerDB/api/current-user/", {
      method: "GET",
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setUser(data); 
        });
      }
    }
    );

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
