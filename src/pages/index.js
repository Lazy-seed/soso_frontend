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
        <Col md="2" className='m-0 border'></Col>

        {/* main screen */}
        <Col md="" className='m-0 border border-danger'>
          <Home />

        </Col>

        {/* right screen */}
        <Col md="3" className='m-0 border'>
          <FollowList />
        </Col>
      </Row>
    </div>
  )
}
