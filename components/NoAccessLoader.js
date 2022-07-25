import React from 'react'
import {BounceLoader} from 'react-spinners'

export default function NoAccessLoader() {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-1 grid-rows-2">

          <div>
            <h2 className="text-3xl">Notice: You do not have access to this application.</h2>
          </div>

          <div className="flex justify-center items-center">
            <BounceLoader
              color={'white'}
              loading={true}
              />
          </div>

        </div>
      </div>
  )
}
