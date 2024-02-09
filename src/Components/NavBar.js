import {Navbar, Form, Button, Nav, Image, NavLink } from 'react-bootstrap'

function NavBar(){

//put data in - create routing

    return(
        <>
            <Navbar bg="primary" data-bs-theme="light" className='justify-content-between p-2'>
                <Navbar.Brand href="#home" className='text-light'>
                    <Image 
                        src="https://shorturl.at/pxDY6"
                        alt="UPDATE THIS"
                        roundedCircle
                        width={100}
                        height={100}
                    /> {' '}
                    Catspace
                </Navbar.Brand> 
                <Navbar.Collapse>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <NavLink className="text-light">Home</NavLink>
                        <NavLink className="text-light">About</NavLink>
                        <NavLink className="text-light">Add a cat</NavLink>
                    </Nav>

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