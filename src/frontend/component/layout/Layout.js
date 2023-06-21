import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Row, Col } from 'react-bootstrap'
export default function Layout(props) {

    return (
        <>
            <Row>
                <Header />
                <Col xs={3} className="pe-0" >
                    <Sidebar />
                </Col>
                <Col xs={9} className='ps-0'>
                    {props.children}
                </Col>
            </Row>
        </>
    )
}
