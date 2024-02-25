import React, { useState } from 'react'
import proflile from './images/proflile.png'

export const FollowList = () => {
    const [useIsFollow, setIsFollow] = useState(false)
    return (
        <div className='d-flex justify-content-between   align-items-center p-1 mt-1'>
            <div className='d-flex justify-content-start gap-2 align-items-center '>

                <img src={proflile} width={50} alt="" />
                <div>
                    <h5 className='fs-6 m-0'>Lisa Manabon</h5>
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
