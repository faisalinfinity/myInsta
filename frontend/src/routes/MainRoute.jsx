import {Routes,Route} from 'react-router-dom'
import Newsfeed from '../pages/Newsfeed'
import Inbox from '../pages/Inbox'
import MessageBox from '../pages/MessageBox'
import Loginpage from '../pages/Loginpage'
import Signuppage from '../pages/Signuppage'
import Forgotpage from '../pages/Forgotpage'
import Search from '../pages/Search'
import Profile from '../pages/Profile'

export default function MainRoute(){
  return (
            <Routes>
                <Route path='/' element={<Newsfeed/>} ></Route>
                <Route path='/inbox' element={<Inbox/>} ></Route>
                <Route path='/message' element={<MessageBox/>} ></Route>
                <Route path='/login' element={<Loginpage/>} ></Route>
                <Route path='/register' element={<Signuppage/>} ></Route>
                <Route path='/login/forgot' element={<Forgotpage/>} ></Route>
                <Route path='/search' element={<Search/>}></Route>
                <Route path='/profile/*' element={<Profile/>}></Route>
            </Routes>)
  
}
