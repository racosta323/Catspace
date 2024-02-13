import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap"

function Footer(){
    return(
        <footer>
            <Container fluid>
               <Row className="bg-secondary text-white p-5 mt-3 pb-2">
                    <Col className="mx-5">
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

                    <Col className="d-flex justify-content-center">
                        <Nav className="list-group fw-normal fs-5 mt-3">Useful Links
                            <NavLink href="/" className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">Home</NavLink>
                            <NavLink href="/about" className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">About</NavLink>
                            <NavLink href="/addacat" className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">Add a cat!</NavLink>
                        </Nav>
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <ul className="list-group fw-normal fs-5 mt-3">Follow us on GitHub!
                            <li className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">
                                <a href="https://github.com/racosta323" target="_blank">
                                    <i className="bi bi-github fs-4 text-dark"></i>
                                </a>{' '}
                                Rene Acosta
                            </li>
                            <li className="list-group-item bg-secondary text-light border border-0 4 fw-light">
                                <a href="https://github.com/Huntmanjoe" target="_blank">
                                    <i className="bi bi-github fs-4 text-dark"></i>
                                </a>{' '}
                                Hunter Matyi
                            </li>
                            <li className="list-group-item bg-secondary text-light border border-0 fs-5 fw-light">
                                <a href="https://github.com/estritt" target="_blank">
                                    <i className="bi bi-github fs-4 text-dark"></i>
                                </a>{' '}
                                Eve Strittmatter
                            </li>
                        </ul>
                    </Col>

                    <hr color="light" className="mt-3 mb-1"></hr>
                        <Row className="mt-3">
                            <Col>
                                <p>Copyright © 2024. All rights reserved.</p>
                            </Col>
                            <Col>
                                <p className="text-end me-4">“Time spent with cats is never wasted.” – Sigmund Freud</p>
                            </Col>
                        </Row>
                        
               </Row>
            </Container>
           
            
        </footer>

    )
}

export default Footer