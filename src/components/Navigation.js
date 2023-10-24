import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div>
        <Navbar expand="lg" variant='dark' bg='dark'>
            <Container fluid>
                <Navbar.Brand Link to="/">
                <img width={100} src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='nav-area'>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '120px' }}
                    navbarScroll
                >
                    <Link to='/' className='nav-item'>Home</Link>
                    <Link to='/movies' className='nav-item'>Movise</Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-danger">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation