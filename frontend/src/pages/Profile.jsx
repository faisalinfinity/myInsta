import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {RiDashboardFill} from 'react-icons/ri'
import {RxVideo} from 'react-icons/rx'
import {MdPermContactCalendar} from 'react-icons/md'
import UserProfileRoutes from '../routes/UserProfileRoute'
import BottomNavbar from '../components/BottomNavbar'

const Profile = () => {
  return (
    <div className='text-white w-full min-h-screen' >
        {/* User Detail Section */}
        <div>
            <div className='flex justify-between sm:justify-around mt-10 p-2' >
                <div>
                    <img height={'100px'} width={'100px'} src='https://img.freepik.com/free-icon/user_318-159711.jpg' alt='profile-pic' />
                </div>
                <div className='flex w-9/12 items-center  justify-around' >
                    <div>
                        <div className='text-center' >2</div>
                        <div>Posts</div>
                    </div>
                    <div>
                        <div className='text-center'>4</div>
                        <div>Followers</div>
                    </div>
                    <div>
                        <div className='text-center'>30</div>
                        <div>Following</div>
                    </div>
                </div>
            </div>

            <div className='px-4 pt-4'>
                <h2>Sarim Khan</h2>
                <h3>Diving into a realm tech Join me this digital journey</h3>
            </div>
            <div className='px-4' >
                <button className='mt-5 py-1 hover:bg-gray-900 bg-gray-800 w-full rounded-md'>Edit Profile</button>
            </div>
        </div>

        {/* User Post Post Reels Section */}
        <div className='flex justify-around mt-6 border-b border-gray-900 pb-2' >
            <RouterLink to='/profile/' >
                <div>
                    <div className='flex justify-center mb-1 text-lg' ><RiDashboardFill/></div>
                    <div>Dashboard</div>
                </div>
            </RouterLink>

            <RouterLink to='/profile/userreels'>
                <div>
                    <div className='flex justify-center mb-1 text-lg' ><RxVideo/></div>
                    <div>Reels</div>
                </div>
            </RouterLink>
            <RouterLink to='/profile/usertags'>
                <div >
                    <div className='flex justify-center mb-1 text-lg' ><MdPermContactCalendar/></div>
                    <div>Tags</div>
                </div>
            </RouterLink>
        </div>
        <div>
            <UserProfileRoutes/>
        </div>
        
        <div className="sm:hidden">
            <BottomNavbar/>
        </div>

    </div>

  )
}

export default Profile
