import {BsTelephone} from 'react-icons/bs'
import {FiVideo} from 'react-icons/fi'
import {ImInfo} from 'react-icons/im'
import {TbSend} from 'react-icons/tb'

const MessageBox = () => {
  return (
    <div className='w-full p-5'>
        {/* Message Box Navbar */}
        <div className='flex justify-between p-2 border-b border-gray-900' >
            <div className='flex' >
                <div><img className='rounded-full h-14 w-14' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSH5CoPfycHF-i4QGr7hAFJceh1_YhyOAm6iJ8symMc0gqQ7TisgGWZHw&s' alt='profile-pic'/></div>
                <div className='font-bold text-white mt-3 ml-4' >Microsoft</div>
            </div>

            <div className='flex mt-3 ' >
                <div><BsTelephone className='text-white cursor-pointer' /></div>
                <div><FiVideo className='text-white mx-4 cursor-pointer'/></div>
                <div><ImInfo className='text-white cursor-pointer'/></div>
            </div>
        </div>



        {/* Message Content */}
        <div>

        </div>


        {/* Footer InputBox */}

        <div className='flex fixed bottom-2' >
            <div style={{width:'630px'}} ><input type='text' className='border border-gray-900 bg-gray-700 rounded-md w-full' /></div>
            <div><TbSend className='text-white ml-2 text-xl cursor-pointer' /></div>
        </div>
      
    </div>
  )
}

export default MessageBox
