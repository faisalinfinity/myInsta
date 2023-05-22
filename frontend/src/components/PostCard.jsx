import {AiOutlineHeart} from 'react-icons/ai'
import {TbSend} from 'react-icons/tb'
import {FaRegComment} from 'react-icons/fa'
import {BsFillSaveFill} from 'react-icons/bs'



const PostCard = ({ name, image,place,likeCount,caption }) => {
    console.log(name,caption)
  return (
        <div className='bg-black w-full sm:w-3/5 mx-1 sm:mx-auto border-b border-gray-900 mt-20 mb-20'  >
              {/* Header  */}
            <div className='flex mb-1 mx-2 ' >
              <div>
                <img className='rounded-full w-10 h-10 '  src={image} alt='newsfeed' />
              </div>

              <div className=' mx-3 ' >
                <div className='text-white font-bold' >{name}<span className='text-white font-thin ml-2 '>1hr</span> </div>
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

            </div>


        </div>
  )
}

export default PostCard




let data = [
  {
    name : 'ronaldo',
    place : 'Las Vegas',
    image : 'data:image/jpeg;base64,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',
    likeCount :202100 ,
    caption : 'Live Young Live Free'
  },
  {
    name : 'iamsrk',
    place : 'Dubai',
    image : 'https://images.indianexpress.com/2023/02/srk-pathaan-1200.jpg',
    likeCount :154765 ,
    caption : 'Party at pathaan with jawan'
  },
  {
    name : 'romanreigns',
    place : 'AT&T',
    image : 'https://cdn.wrestletalk.com/wp-content/uploads/2023/04/roman-reigns-undisputed-wwe-universal-champion-april-5-a.jpg',
    likeCount :54535 ,
    caption : 'Head the Table'
  },
  {
    name : 'raftaar',
    place : 'Mumbai Maharashtra',
    image : 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRI-3U385GyhvABdG82NdyYFf3MryKLlYm5U4V4_UDt-6ZLIc-mBoMq1vL9_InV4l2gguUmkJkYTy8GFYk',
    likeCount :543145 ,
    caption : 'God bless you'
  },
  {
    name : 'emiwaybantai',
    place : 'Mumbai Maharshtra',
    image : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQb-oLUXwKGXI6C4U6gkycJsXlpiZqvMdPB0Yp8LFXvRuuoFHcF',
    likeCount :54514 ,
    caption : 'Machayenge'
  },
]