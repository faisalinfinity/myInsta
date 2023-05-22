import React from 'react'

const Inbox = () => {
  return (
    <div className='w-full mx-auto mt-10 px-5' >
            <div className='text-white text-xl font-bold pl-3' >
                sarimkhan_208
            </div><div className='text-white text-sm font-bold pl-3 mt-2' >
                Messages
            </div>
            {
                data.map((el)=>(
                    <div key={el.id} className='flex justify-between my-3 cursor-pointer hover:bg-gray-900 w-full rounded-md p-2 ' >
                        <div className='flex'>
                            <div className='mr-4 mt-2' >
                                <img className='w-9 h-9 rounded-full' src={el.img}  alt='profile-pic' />
                            </div>
                            <div>
                                <div className='text-white font-bold' >{el.name}</div>
                                <div className='text-gray-400 text-xs ' >{el.active}</div>
                            </div>
                        </div>
                        <div className='text-gray-400 text-xs mt-4' >
                            message
                        </div>
                    </div>
                ))
            }
        </div>
  )
}

export default Inbox



let data = [
    {
        id: 1,
        img : 'https://img.freepik.com/free-icon/user_318-159711.jpg',
        name : "Bhuvan bam",
        username : "bhuvan_bam_22",
        active : 'active now'
    },
    {
        id: 2,
        img : "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA",
        name : "Shah Rukh Khan",
        username : "iamsrk",
        active : '2hr ago'
    },
    {
        id: 3,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSH5CoPfycHF-i4QGr7hAFJceh1_YhyOAm6iJ8symMc0gqQ7TisgGWZHw&s",
        name : "Carry Minati",
        username : "carryminati",
        active : '1min ago'
    },
    {
        id: 4,
        img : "data:image/jpeg;base64,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",
        name : "Paul walker",
        username : "paulwalker",
        active : 'since 2013'
    }
]