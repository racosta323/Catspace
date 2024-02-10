import React from "react"
import '../App.css';
import { Container, Row, Col, Image, Stack } from 'react-bootstrap'

function About() {



    return (
        <Container>
            <Row>
                <Col className="m-5, p-5"></Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 1 }} className="m-5, p-5">
                    <h1 class="fw-bold my-5">About The Site!</h1>
                    <p>All work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boy</p>
                </Col>
                <Col className="m-5, p-5">
                    <Image 
                        src="https://static.scientificamerican.com/sciam/cache/file/9CAE9C60-8BC5-4CA3-95C180EFACDD99FD_source.jpg" 
                        alt="Hero Cat!" 
                        width={380}
                        height={380}
                        rounded
                    />
                </Col>
            </Row>
            
            <Row>
                <Col className="m-5, p-5"></Col>
            </Row>

            <Row>
                <Col>
                    <h2 class="text-center fw-bolder">Developers</h2>
                </Col>
            </Row>
            
            <Row className="justify-content-md-center pe-5">
                
                <Col className="m-5 pe-1">
                    <Stack className="col-md-6 mx-auto">
                        <Image
                            src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/169588_v9_bb.jpg"
                            alt="photo of Rene"
                            width={171}
                            height={180}
                            roundedCircle
                        />
                        <h3 class="text-center">Rene Acosta</h3>
                        <p class="text-center">All work and no play makes Jack a dull boy</p>
                    </Stack>
                </Col>


                <Col className="m-5 pe-1">
                    <Stack className="col-md-6 mx-auto">
                        <Image
                            src="https://cdn.outsideonline.com/wp-content/uploads/2020/10/29/hunting-for-beginners-lead_s.jpg"
                            alt="photo of Hunter"
                            width={171}
                            height={180}
                            roundedCircle
                        />
                        <h3 class="text-center">Hunter Matyi</h3>
                        <p class="text-center">All work and no play makes Jack a dull boy</p>
                    </Stack> 
                </Col>
                
                <Col className="m-5 pe-1">
                    <Stack className="col-md-6 mx-auto">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Eve_2011_cropped.jpg"
                            alt="photo of Eve"
                            width={170}
                            height={180}
                            roundedCircle
                        />
                        <h3 class="text-center">Eve Strittmatter</h3>
                        <p class="text-center">All work and no play makes Jack a dull boy</p>
                    </Stack>
                </Col>
            </Row>

            <Row>
                <Col className="m-5, p-5"></Col>
            </Row>
            
            <Row>
                <Col className="m-5, p-5">
                    <h3 class="text-center fw-bold">Something About the Project</h3>
                    <p class="text-center">All work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boyAll work and no play makes Jack a dull boy</p>
                </Col>
            </Row>    

        </Container>
    )
}

export default About;