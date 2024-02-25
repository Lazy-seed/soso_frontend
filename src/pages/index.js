import React from 'react'
import Home from './home/Home'
import TopNav from '../utilities/TopNav'
import { Col, Container, Row } from 'reactstrap'
import { FollowList } from '../components/MainComponents'

export default function HomePages() {
  return (
    <div>
      <TopNav />
      <Row className='mx-0' style={{ minHeight: "400px" }}>

        {/* left screen */}
        <Col md="2" className=' p-1'>
        <div className='p-1 border rounded-2 h-100'>
          </div>
        </Col>

        {/* main screen */}
        <Col md="" className='  p-1'>
          <div className='p-1 border rounded-2 h-100'>
            <Home />
          </div>
        </Col>

        {/* right screen */}
        <Col md="3" className=' p-1 '>
          <div className='border rounded-2 p-2 py-3'>
            <div className='d-flex justify-content-between align-items-center  px-2 mt-2 mb-3' >
              <h6 className=''>Popular Profile</h6>
              <h6 className=''>See All</h6>
            </div>
            <div>
              <FollowList />
              <FollowList />
              <FollowList />
              <FollowList />
            </div>
          </div>

        </Col>
      </Row>
    </div>
  )
}
