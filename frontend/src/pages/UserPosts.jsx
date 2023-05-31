import React from 'react'

const UserPosts = () => {
    return (
        <div className='bg-black min-h-screen w-full p-2' >
            <div className='grid grid-cols-3 gap-1' >
                {
                    data.map((el)=>(
                        <div>
                            <img className='w-full h-full' src={el} alt='img' />
                        </div>
                    ))
                }
            </div>
        </div>)
}

export default UserPosts


let data = [
    "https://i.pinimg.com/originals/a3/fb/5d/a3fb5def518705c9cc739299234c2779.jpg",
    "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA",
    "https://m.media-amazon.com/images/M/MV5BMjc0MDFkMDYtMmFmMy00MjAxLWJhOTAtMWRmYTcwNGY1Mjc5XkEyXkFqcGdeQXVyOTg3NTQwMTU@._V1_.jpg",
    "https://feeds.abplive.com/onecms/images/uploaded-images/2021/11/28/64f4868e929fad2ae73b82b760d8da2c_original.jpg",
    "https://m.economictimes.com/thumb/msid-93354400,width-1200,height-900,resizemode-4,imgsize-70672/salman-khan.jpg",
    "https://aflence.com/wp-content/uploads/2022/09/zakir-khan-4.jpg",
    "https://starsunfolded.com/wp-content/uploads/2020/08/Anubhav-Singh-Bassi.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTDUdns7y_hs_GWe4tV5FrwHwNprl_1e1bVg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlBAM02HwlEiNks2VC3nj9VTyCPVCE6ZaTg&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/d/dd/Salmanrampwalk.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYasOPk3Kl17TE-Tko7n37PaKU9zIwlAxQsw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3sNg1wVr6zuq7IK-O6Pip7h2QHo6LNWE7wc5k-NXT&s",
    "https://media.bleacherreport.com/image/upload/x_0,y_490,w_1800,h_1195,c_crop/c_fill,g_faces,w_1600,h_1600,q_95/v1664571327/lglmzfxj1eh4sqsyi0ez.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvN_uLAmm-KLAAYL4swZzvEYaAojR7qet4Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MrqIkBybhovQYjdIJ4KBapbfOJqc_h9mgQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcVOrEyiIUMnNaaXZdZ6VnakUNCB2TE7Gsg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVB9Ue_8sBmoKgtT_X8xz9iJPHonJGMuN1iA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19BprDnWBAdo1YjW69GdL_BDdr8vXA67o2w&usqp=CAU",
]

