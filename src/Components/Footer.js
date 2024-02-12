import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap"

function Footer(){
    return(
        <footer>
            <Container fluid>
               <Row className="bg-secondary text-white p-5 mt-3 pb-2">
                    <Col className="ms-5" xs={4}>
                        <Stack>
                            <a href="/">
                                <Image 
                                src="https://shorturl.at/pxDY6"
                                alt="UPDATE THIS"
                                roundedCircle
                                width={125}
                                height={125}
                                className='p-1 ms-4'
                            /> {' '}
                            </a>
                            <h2 className="fs-1">Catspace</h2>
                            <p>Where cats have profiles</p>
                        </Stack>
                    </Col>

                    <Col>
                        <Nav className="list-group fw-medium fs-5 mt-3">Useful Links
                            <NavLink href="/" className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">Home</NavLink>
                            <NavLink href="/about" className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">About</NavLink>
                            <NavLink href="/addacat" className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">Add a cat!</NavLink>
                        </Nav>
                    </Col>

                    <Col>
                        <ul className="list-group fw-medium fs-5 mt-3">Contact us
                            <li className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">
                                {/* figure out how to include GH icon */}
                                Git repo - Rene
                            </li>
                            <li className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">Git repo - Hunter</li>
                            <li className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">Git repo - Eve</li>
                        </ul>
                    </Col>

                    <hr color="light" className="mt-3 mb-1"></hr>
                        <Row className="mt-3">
                            <Col>
                                <p>Copyright © 2024. All rights reserved.</p>
                            </Col>
                            <Col>
                                <p className="text-end">Something on the other side</p>
                            </Col>
                        </Row>
                        
               </Row>
            </Container>
           
            
        </footer>

    )
}

export default Footer