import React from 'react'
import { Button, Container, Navbar, Form } from 'react-bootstrap';
import './Header.css'
export default function Header(props) {
    

    return (
        <Container className='pe-0 ps-0'>
            <Navbar expand="lg" variant="light" bg="light">

                <Container>
                    <Navbar.Brand href="#">
                        <span className='title'>E-commerce</span>
                    </Navbar.Brand>
                </Container>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
        </Container>
    )
}
