import React, { useState } from 'react'
import proflile from './images/proflile.png'
import post1 from './images/post1.png'

export const FollowList = () => {
    const [useIsFollow, setIsFollow] = useState(false)
    return (
        <div className='d-flex justify-content-between   align-items-center p-1 '>
            <div className='d-flex justify-content-start gap-2 align-items-center '>

                <img src={proflile} width={50} alt="" />
                <div>
                    <h5 className='fs-6 m-0  fw-'>Lisa Manabon</h5>
                    <p className='fs-7 text-secondary mb-0'>12.5K Followers</p>
                </div>
            </div>
            {
                useIsFollow ?
                    <button className='btn btn-outline-primary text-primary px-3 rounded-5 fs-7' style={{ width: "100px" }} onClick={() => setIsFollow(!useIsFollow)}>Unfollow</button>
                    :
                    <button className='btn btn-primary text-white px-3 rounded-5 fs-7' style={{ width: "100px" }} onClick={() => setIsFollow(!useIsFollow)}>Follow</button>
            }
        </div>
    )
}


export const PostList = () => {
    // const [useIsFollow, setIsFollow] = useState(false)
    return (
        <div className=' p-1'>
            <div className='d-flex justify-content-between align-items-start  px-1'>
                <div className="w- mt-">
                    <h6>Travel, because money returns. Time doesn't</h6>
                    <div className='d-flex gap-2  justify-content-start mt-1'>
                        <h6 className="fs-8 fw-normal text-secondary opacity-75 ">Alexander john</h6>
                        <h6 className="fs-8 fw-normal text-secondary opacity-75 ">32K Comment</h6>
                    </div>
                </div>
                <div className="" >
                    <img src={post1} width={120} className='rounded-3 object-fit-cover ' alt="" />
                </div>
            </div>

        </div>
    )
}
