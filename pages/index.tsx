import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ManagerDBForm from '../components/ManagerDBForm'

const Home: NextPage = () => {
  // Redirect user to Home page
  
  return (
    // Form with 3 dropdowns
    <div className="flex">
      <Head>
        <title>Manager DB Tool</title>
      </Head>

      <ManagerDBForm/>

      
    </div>
  )
}

export default Home
