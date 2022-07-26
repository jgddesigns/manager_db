import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import jwt_decode from "jwt-decode";
import {useState,useEffect} from "react";
import NoAccessLoader from "../components/NoAccessLoader";
import LoadingLoader from "../components/LoadingLoader";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<Object | null>(null); // User JWT defined in header
  const [isAdmin, setIsAdmin] = useState<boolean>(false); // Only users with Admin Access should be able to access the app.
  const [isLoading, setIsLoading] = useState<boolean>(true); // Show loading screen while checking if user has admin access.

  useEffect(() => {
    // fetch from api/current-user
    fetch("/ManagerDB/api/current-user/", {
      method: "GET",
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setUser(data); 
          setIsAdmin(data.IsAdmin);
          setIsLoading(false);
        });
      }
    }
    );

  }, []);



  

  // Page has loaded...
  // User is Logged in and isAdmin = true
  if(user && isAdmin){

      // While page is loading...
    if(isLoading){
      return (
        <LoadingLoader/>
      )
    }

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
