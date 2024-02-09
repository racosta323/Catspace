import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Image from "react-bootstrap/Image"
import Stack from "react-bootstrap/Stack"

function NavBar(){

//put data in - create routing

    return(
        <>
            <Navbar 
                className="bg-body-primary h-25 m-2"
                bg="primary"
                data-bs-theme="dark"
                fixed="top"
                expand="lg"
            >
                <Container fluid>
                    <Navbar.Brand href="#home" className='m-5'>
                        <Row className='space-between'>
                            <Col xs={3} md={2} className="align-self-center">
                                <Image 
                                src="https://shorturl.at/pxDY6"
                                alt="UPDATE THIS"
                                roundedCircle
                                width={180}
                                height={180}
                                /> {' '}
                            </Col>
                            <Col className="align-self-center ms-5" xs={3} md={4}>
                                <h1 className='text-light'>Catspace</h1>
                                <p className="text-light">Where cats have profiles - TEST</p>
                                <Nav className='ms-6 my-2 my-lg-0'>
                                    <Nav.Link href="#" className="text-light fs-4 pe-3 ps-0">Home</Nav.Link>
                                    <Nav.Link href="#" className="text-light fs-4 pe-3">About</Nav.Link>
                                    <Nav.Link href="#" className="text-light fs-4">Add a cat!</Nav.Link>
                                </Nav>
                            </Col>
                            <Col className="d-flex justify-content-end align-items-center ms-5 p-0" xs={12} md="auto">
                                {/*FORM HERE*/}
                                <Form className="d-flex">
                                    <Row>
                                        <Col xs="auto">
                                            <Form.Control
                                                type="text"
                                                placeholder="Search for a cat"
                                                className="mr-sm-2"
                                            />
                                        </Col>
                                        <Col xs="auto" className='flex=grow-1'>
                                            <Button 
                                                type="submit"
                                                variant="light"
                                            >Submit</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>    
    )
}

export default NavBar