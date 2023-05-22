import {Routes,Route} from 'react-router-dom'
import Newsfeed from '../pages/Newsfeed'
import Inbox from '../pages/Inbox'
import MessageBox from '../pages/MessageBox'

export default function MainRoute(){
  return (
            <Routes>
                <Route path='/' element={<Newsfeed/>} ></Route>
                <Route path='/inbox' element={<Inbox/>} ></Route>
                <Route path='/message' element={<MessageBox/>} ></Route>
            </Routes>)

    
  
}
