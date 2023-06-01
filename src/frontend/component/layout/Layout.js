import React from 'react'
import Home from '../../pages/Home'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../product/ProductCard'
export default function Layout(props) {

    return (
        <>
            <Row>
                <Header />
                <Col xs lg={3} className="pe-0" >
                    <Sidebar />
                </Col>
                <Col xs lg={9} className='ps-0'>
                    {props.children}
                </Col>
            </Row>
        </>
    )
}
