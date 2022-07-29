import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ManagerDBTable from '../components/ManagerDBTable'

const Home: NextPage = () => {
  // Redirect user to Home page
  
  return (
    // Form with 3 dropdowns
    <div className="flex">
      <Head>
        <title>Manager DB Tool</title>
      </Head>
      <ManagerDBTable/>

      
    </div>
  )
}

export default Home
