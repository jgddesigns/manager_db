
import {FadeLoader} from 'react-spinners'

export default function NoAccessLoader() {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-1 grid-rows-2">

          <div>
            <h2 className="text-3xl">Loading Content...</h2>
          </div>

          <div className="flex justify-center items-center">
            <FadeLoader
              color={'white'}
              loading={true}
              />
          </div>

        </div>
      </div>
  )
}
