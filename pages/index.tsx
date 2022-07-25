import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  // Redirect user to Home page
  
  return (
    // Form with 3 dropdowns
    <div className="flex ">
      
      <Head>
        <title>Manager DB Tool</title>
      </Head>
      <form>
        
        <select aria-label="Default select example"
        className="form-select appearance-noneblock w-full px-3 py-1.5 text-base font-normal text-gray-700
        bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;">

          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>

        </select>
        <select aria-label="Default select example"
        className="form-select appearance-noneblock w-full px-3 py-1.5 text-base font-normal text-gray-700
        bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;">

          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>

        </select>
        <select aria-label="Default select example"
        className="form-select appearance-noneblock w-full px-3 py-1.5 text-base font-normal text-gray-700
        bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;">

          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>

        </select>
      </form>
    </div>
  )
}

export default Home
