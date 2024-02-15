import { Navbar, Form, Nav, Image, NavLink, Stack, Col, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

function NavBar({ setSearchTerm }) {
    const navigate = useNavigate()
    const onChangeHandler = (e) => {
        setSearchTerm(e.target.value);
    };
    const onSearchSubmit = (e) => {
        console.log('asdf')
        e.preventDefault();
        navigate(`/`);
    };

    return (
        <>
            <Navbar bg="primary" data-bs-theme="light" className='justify-content-between p-2' sticky="top">
                <a href="/">
                    <Image 
                        src="./Logo.jpg"
                        alt="Logo"
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
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                        <NavLink className="text-light fw-light" href="/">Home</NavLink>
                        <NavLink className="text-light fw-light" href="/about">About</NavLink>
                        <NavLink className="text-light fw-light" href="/addacat">Add a cat!</NavLink>
                    </Nav>
                   
                    <Form className="d-flex" onSubmit={onSearchSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search a cat"
                            className="me-4"
                            aria-label="Search"
                            onChange={onChangeHandler}
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;