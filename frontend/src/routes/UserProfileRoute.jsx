import {Routes,Route} from 'react-router-dom'
import UserPosts from '../pages/UserPosts'
import UserReels from '../pages/UserReels'
import UserTags from '../pages/UserTags'

export default function UserProfileRoutes(){
  return (
            <Routes>
                <Route path='/' element={<UserPosts/>} ></Route>
                <Route path='/userreels' element={<UserReels/>} ></Route>
                <Route path='/usertags' element={<UserTags/>} ></Route>
            </Routes>)
  
}
