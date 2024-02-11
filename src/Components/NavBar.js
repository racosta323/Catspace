import {Navbar, Form, Button, Nav, Image, NavLink, Stack, Col, Row } from 'react-bootstrap'

function NavBar(){

//put data in - create routing

    return(
        <>
            <Navbar 
                bg="primary" 
                data-bs-theme="light" 
                className='justify-content-between p-2'
                sticky="top"
            >
                <a href="/">
                    <Image 
                        src="https://shorturl.at/pxDY6"
                        alt="UPDATE THIS"
                        roundedCircle
                        width={100}
                        height={100}
                        className='p-1 ms-4'
                    /> {' '}
                </a>

                <Row>
                    <Col className='me-3'>
                        <Stack className='text-light p-2 mt-1'>
                            <h3 className='fw-semibold'>Catspace</h3>
                            <p>Where cats have profiles</p>
                        </Stack>
                    </Col>
                </Row>
    
                <Navbar.Collapse>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <NavLink className="text-light fw-semibold" href="/">Home</NavLink>
                        <NavLink className="text-light fw-semibold" href="/about">About</NavLink>
                        <NavLink className="text-light fw-semibold" href="/addacat">Add a cat!</NavLink>
                    </Nav>
                   
                    {/*Form*/}
                    <Form className="d-flex p-4">
                        <Form.Control
                            type="search"
                            placeholder="Search a cat"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="dark">Search</Button>
                    </Form>                    

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar