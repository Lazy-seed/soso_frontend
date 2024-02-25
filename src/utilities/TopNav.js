import React from 'react'
import { Col, Row } from 'reactstrap'
import logo1 from './images/logo1.png'
import proflile from './images/proflile.png'
import { Bell, ChevronDown } from 'react-feather'

export default function TopNav() {
  return (
    <div className='border p-2'>
      <Row >
        <Col md="3" className=" d-flex  align-items-center gap-2">
          <img src={logo1} alt="" width={80} />
          <h3 className='m-0'>SoSo-Media</h3>
        </Col>
        <Col md="5" sm="8" className="  d-flex justify-content-center  align-items-center ">
          <div class="group w-100">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
              </g>
            </svg>
            <input class="input" type="search" placeholder="Search" />
          </div>

        </Col>
        <Col md="4" sm="4" className="  d-flex justify-content-end  align-items-center gap-5">
          <div>
            <Bell />
          </div>
          <div className='d-flex justify-content-center align-items-center gap-3'>
            <h5 className='fs-5 m-0 '>Lisa Manabon</h5>
            <div class="dropdown">
              <div className='d-flex justify-content-center  align-items-center gap-3 ' data-bs-toggle="dropdown" aria-expanded="false">
                <img src={proflile} width={50} alt="" />
              </div>
              <ul class="dropdown-menu " >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div>

            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
