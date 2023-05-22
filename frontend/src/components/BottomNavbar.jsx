import {AiFillHome} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import {RxVideo,RxAvatar} from 'react-icons/rx'
import {RiAddCircleLine} from 'react-icons/ri'

const BottomNavbar = () => {
  return (
    <div className='flex fixed bottom-0 left-0 w-full bg-black justify-around'>
        <div className='py-1' >
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <AiFillHome className='text-2xl text-white' />
            </button>
        </div>

        <div className='py-1'>
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <BiSearchAlt2 className='text-2xl text-white' />
            </button>
        </div>

        <div className='py-1'>
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <RiAddCircleLine className='text-2xl text-white' />
            </button>
        </div>

        <div className='py-1'>
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <RxVideo className='text-2xl text-white' />
            </button>
        </div>

        <div className='py-1'>
            <button className='flex hover:bg-gray-900 w-full rounded-md p-2'>
                <RxAvatar className='text-2xl text-white' />
            </button>
        </div>
      
    </div>
  )
}

export default BottomNavbar
