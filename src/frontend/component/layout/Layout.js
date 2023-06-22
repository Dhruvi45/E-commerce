import React, { useState, createContext } from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Row, Col } from 'react-bootstrap'

export const filterContext = createContext("");

export default function Layout(props) {
    const [filter, setFilter] = useState({
        category: ""
    })
    return (
        <>
            <filterContext.Provider value={{ filter, setFilter }}>
                <Row>
                    <Header />
                    <Col xs={3} className="pe-0" >
                        <Sidebar />
                    </Col>
                    <Col xs={9} className='ps-0'>
                        {props.children}
                    </Col>
                </Row>
            </filterContext.Provider>
        </>
    )
}
