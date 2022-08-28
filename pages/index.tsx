import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ManagerDBTable from '../components/ManagerDBTable'
import Favicon from 'react-favicon'

const Home: NextPage = () => {
  // Redirect user to Home page
  
  return (
    // Form with 3 dropdowns
    <div className="flex">
      <Head>
        <title>Manager DB Tool</title>
        <Favicon url="http://svgccrm01.dot.ca.gov:3000/ManagerDB/pages/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="images/favicon.png" />
      </Head>
      <ManagerDBTable/>

      
    </div>
  )
}

export default Home
