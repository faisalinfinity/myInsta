// import './App.css'
import BottomNavbar from './components/BottomNavbar'
import LeftSidebar from './components/LefSidebar'
import RightSidebar from './components/RighSidebar'
import TopNavbar from './components/TopNavbar'
import Inbox from './pages/Inbox'
import MessageBox from './pages/MessageBox'
import MainRoute from './routes/MainRoute'

function App() {


  return (
    <div className="flex w-100 ">
            <div className="bg-black sm:hidden" >
                <TopNavbar/>
            </div>
            <div className="hidden sm:flex w-0 sm:w-1/4 bg-black border border-gray-900 border-r-1">
                <LeftSidebar/>
            </div>
            <div className="flex w-full sm:w-1/2 bg-black">
                <MainRoute/>
            </div>
            <div className="hidden sm:flex w-0 sm:w-1/4 bg-black">
                <RightSidebar/>
            </div>
            <div className="block bg-black sm:hidden" >
                <BottomNavbar/>
            </div>
    </div>


  )
}

export default App
