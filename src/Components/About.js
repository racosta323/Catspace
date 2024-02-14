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
                    <h2 className="fw-bold my-5">About The Site!</h2>
                    <p>
                        There are an estimated <a href="https://www.reference.com/pets-animals/many-cats-world-4d3ed6a78c600697">600 million cats</a> in the world that all need love, attention and snuggles. 
                        It's almost impossible to keep track of them all!
                    </p>
                    <p>
                        With that in mind, Catspace© was developed to ensure that every cat has a chance to connect with cat lovers around the world.
                    </p>
                    <p>
                        Check out cats from around the world and create and share your own cat's profile with the rest of the cat community!
                    </p>
                </Col>
                <Col className="m-5, p-5">
                    <Image 
                        src="https://static.scientificamerican.com/sciam/cache/file/9CAE9C60-8BC5-4CA3-95C180EFACDD99FD_source.jpg" 
                        alt="Hero Cat!" 
                        width={360}
                        height={360}
                        rounded
                    />
                </Col>
            </Row>
            
            <Row>
                <Col className="m-4, p-5"></Col>
            </Row>

            <Row>
                <Col className="m-4, p-4"></Col>
            </Row>

            <Row>
                <Col>
                    <h2 className="text-center fw-bolder">Developers</h2>
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
                            style={{ alignSelf: 'center' }}
                        />
                        <h3 className="text-center">Rene Acosta</h3>
                        <p className="text-center">Cat lover since 2012, Rene is owned by two fluffy female felines.</p>
                    </Stack>
                </Col>


                <Col className="m-5 pe-1">
                    <Stack className="col-md-6 mx-auto">
                        <Image
                            src="/HunterDeveloper.jpg"
                            alt="photo of Hunter"
                            width={171}
                            height={180}
                            roundedCircle
                            style={{ alignSelf: 'center' }}
                        />
                        <h3 className="text-center">Hunter Matyi</h3>
                        <p className="text-center">Always has 3 cats. Never 2, never 4.</p>
                    </Stack> 
                </Col>
                
                <Col className="m-5 pe-1">
                    <Stack className="col-md-6 mx-auto">
                        <Image
                            src="/EveDeveloper.jpg"
                            alt="photo of Eve"
                            width={180}
                            // height={180}
                            roundedCircle
                            style={{ alignSelf: 'center' }}
                        />
                        <h3 className="text-center">Eve Strittmatter</h3>
                        <p className="text-center">Eve has always lived with cats, so she has never had untorn clothing.</p>
                    </Stack>
                </Col>
            </Row>

            <Row>
                <Col className="m-5, p-5"></Col>
            </Row>
            
            <Row>
                <Col className="m-5, p-3">
                    <h3 className="text-center fw-bold">Project Background</h3>
                    <br/>
                    <p className="text-center">
                        Tasked with creating a single page application from scratch using the React library while at <a href="https://flatironschool.com/courses/coding-bootcamp/">Flatiron School's Software Engineering Bootcamp</a> in 2024, Rene, Hunter, and Eve's shared interest in cats inspired the development of this app. 
                    </p>
                    <p className="text-center">
                        The app uses client-side routing and navigation tools to help users get around easily. Users will also see that they can contribute to our cat library by creating profile(s) for their own cat(s)! Check out our README for more details on app functions and navigation.
                    </p>
                    <p className="text-center">
                        We hope you have as much fun navigating the site as we did creating it!
                    </p>
                </Col>
            </Row>    
        </Container>
    );
}

export default About;