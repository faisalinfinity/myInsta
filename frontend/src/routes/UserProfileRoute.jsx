import {Routes,Route} from 'react-router-dom'
import UserPosts from '../pages/UserPosts'
import UserReels from '../pages/UserReels'
import UserTags from '../pages/UserTags'
import UserSinglePost from '../pages/UserSinglePost'

export default function UserProfileRoutes(){
  return (
            <Routes>
                <Route path='/' element={<UserPosts/>} ></Route>
                <Route path='/userreels' element={<UserReels/>} ></Route>
                <Route path='/usertags' element={<UserTags/>} ></Route>
                <Route path='/usersinglepost' element={<UserSinglePost/>} ></Route>
            </Routes>)
  
}
