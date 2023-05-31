import {AiFillHome} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import {RxVideo,RxAvatar} from 'react-icons/rx'
import {RiAddCircleLine} from 'react-icons/ri'
import { Link as RouterLink } from 'react-router-dom'
import MyModal from './CreatePost'

const BottomNavbar = () => {
  return (
    <div className='flex fixed bottom-0 left-0 w-full bg-black justify-around'>
        <RouterLink to='/' >
        <div className='py-1' >
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <AiFillHome className='text-2xl text-white' />
            </button>
        </div>
        </RouterLink>

        <RouterLink to='/search'>
        <div className='py-1'>
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <BiSearchAlt2 className='text-2xl text-white' />
            </button>
        </div>
        </RouterLink>

        <RouterLink >
        <div className='py-1'>
        <MyModal mobile={true} />
            {/* <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <RiAddCircleLine className='text-2xl text-white' />
            </button> */}
        </div>
        </RouterLink>

        <RouterLink to='/reels'>
        <div className='py-1'>
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <RxVideo className='text-2xl text-white' />
            </button>
        </div>
        </RouterLink>

        <RouterLink to='/profile'>
        <div className='py-1'>
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <RxAvatar className='text-2xl text-white' />
            </button>
        </div>
        </RouterLink>
      
    </div>
  )
}

export default BottomNavbar
