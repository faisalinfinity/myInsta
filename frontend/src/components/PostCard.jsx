import {AiOutlineHeart} from 'react-icons/ai'
import {TbSend} from 'react-icons/tb'
import {FaRegComment} from 'react-icons/fa'
import {BsFillSaveFill} from 'react-icons/bs'



const PostCard = ({ name, image,place,likeCount,caption }) => {
  return (
        <div className='bg-black w-full sm:w-3/5 mx-1 sm:mx-auto border-b border-gray-900 sm:mb-10'  >
              {/* Header  */}
            <div className='flex mb-1 mx-2 ' >
              <div>
                <img className='rounded-full w-10 h-10 '  src={image} alt='newsfeed' />
              </div>

              <div className=' mx-3 ' >
                <div className='text-white font-bold' >{name}<span className='text-white font-thin ml-2 '></span> </div>
                <div className='text-blue-400 text-xs ' >{place}</div>
              </div>
            </div>

              {/* Middle */}
            <div className='mt-2 h-480px sm:h-540px'>
              <img src={image} className='h-full w-full' alt='post-image' />
            </div>

              {/* Footer */}
            <div className='my-5 mx-2' >

              {/* Like Comment Share Logo */}
              <div className='flex justify-between' >
                  <div className='flex' >
                      <AiOutlineHeart className='text-white text-2xl'/>
                      <FaRegComment className='text-white text-2xl mx-4'/>
                      <TbSend className='text-white text-2xl'/>
                  </div>

                  <div>
                      <BsFillSaveFill className='text-white'/>
                  </div>
              </div>

              <div className=' mt-2 text-white text-base font-bold'>
                  {likeCount} likes
              </div>
              <div className='flex' >
                  <div className='text-white text-base font-bold'>{name}</div>
                  <div className='text-white text-base ml-2'>{caption}</div>
              </div>
              <div className='text-base text-gray-600 mt-2 cursor-pointer'>
                View all 5 comments
              </div>
              <div className='text-xs text-gray-600'>
                1 day ago
              </div>

            </div>


        </div>
  )
}

export default PostCard

