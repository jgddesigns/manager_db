
import ManagerDBForm from './ManagerDBForm'
import ManagerDBView from './ManagerDBView'

export default function index() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 mx-auto ">
        <div>
            <ManagerDBForm />
        </div>
        <div>
            <ManagerDBView />
        </div>

    </div>
  )
}
