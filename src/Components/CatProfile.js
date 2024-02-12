import { Container, Image, Row, Col, Button, Card } from "react-bootstrap"

function CatProfile(){
    return(
        <Container fluid className="p-5 mt-4">
            <Row className="p-5 pb-0 mb-0">
                
            {/* <-- profile photo image --> */}
                <Col xs={4} className="p-1 ms-5">
                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="image-size ms-5 position-absolute"
                    />
                </Col>
                
            {/* <-- banner image --> */}
                <Image
                    src="https://moderncat.com/wp-content/uploads/2014/08/play-sequence-1.png"
                    alt="something"
                    fluid
                    style={{ height: '475px'}}
                />

                <Row className="m-5"></Row>
                <Row className="m-5"></Row>

            </Row>

            <Container fluid className="my-5">
                
                <Row className="ms-5">
                    <Col className="ms-5 ps-5">
                        <h2 className="fs-1 fw-bold text-start ms-5">CAT NAME</h2>
                        <h3 className="ms-5">LOCATION</h3>

            {/* <--Photos button--> */}
                        <Row className="m-4"></Row>
                        <Button href="#" variant="primary" className="ms-5">Photos</Button>
                    </Col>
                </Row>

                <hr className="ms-5"></hr>
                <Row className="m-3"></Row>

            {/* <--About section--> */}
                <Row className="mx-5 mb-0">
                    <Col className="my-3 ps-5">
                        <Card>
                            <Card.Body className="shadow-lg bg-white rounded">
                                <Card.Text className="fs-2 fw-semibold">ABOUT</Card.Text>
                                <Card.Text className="fs-4 fw-medium">Lives in:</Card.Text>
                                <Card.Text className="fs-4 fw-medium">From:</Card.Text>
                                <Card.Text className="fs-4 fw-medium">Nickname(s): </Card.Text>
                                <Card.Text className="fs-4 fw-medium">Pronounces Name:</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            {/* <--Comments section--> */}
                <Row className="mx-5 mt-0">
                    <Col className="my-4 ps-5">
                        <Card>
                            <Card.Body className="shadow-lg bg-white rounded">
                                <Card.Text className="fs-2 fw-semibold">COMMENTS</Card.Text>
                                <Card.Text className="fs-5">Comment 1</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </Container>
    )
}

export default CatProfile

