import React from 'react'
import TopNav from '../utilities/TopNav'
import { Col, Container, Row } from 'reactstrap'
import { FollowList, MessageList, PostList } from '../components/MainComponents'
import HomeRoutes from './HomeRoutes'

export default function HomePages() {
  return (
    <div>
      <TopNav />
      <Row className='mx-0 mt-3' style={{ minHeight: "400px" }}>

        {/* left screen */}
        <Col md="2" className=' p-1 ps-0'>
          <div className='border rounded-2 p-3 py-3'>
            <div className='d-flex justify-content-between align-items-center  px-2 mt-2 mb-2' >
              <h6 className=''>Message</h6>
              <h6 className='fs-8'>See All</h6>
            </div>
            <div className='d-flex flex-column gap-1'>
              <MessageList />
              <MessageList />
              <MessageList />
              <MessageList />
            </div>
          </div>
        </Col>

        {/* main screen */}
        <Col md="" className='  p-1'>
          <div className='p-1 border rounded-2 h-100'>
            <HomeRoutes />
          </div>
        </Col>

        {/* right screen */}
        <Col md="3" className=' p-1 pe-0'>
          <div className='border rounded-2 p-3 py-3'>
            <div className='d-flex justify-content-between align-items-center  px-2 mt-2 mb-2' >
              <h6 className=''>Popular Profile</h6>
              <h6 className='fs-7'>See All</h6>
            </div>
            <div className='d-flex flex-column gap-1'>
              <FollowList />
              <FollowList />
              <FollowList />
              <FollowList />
            </div>
          </div>

          {/* postss */}
          <div className='border rounded-2 p-3 py-3 mt-2'>
            <div className='d-flex justify-content-between align-items-center  px-2 mt-2 mb-2' >
              <h6 className=''>Trending Post</h6>
              <h6 className='fs-7'>See All</h6>
            </div>
            <div className='d-flex flex-column gap-2 '>
              <PostList />
              <PostList />
              <PostList />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
