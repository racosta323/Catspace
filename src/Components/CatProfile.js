import { Container, Image, Row, Col, Button } from "react-bootstrap"

function CatProfile(){
    return(
        <Container fluid className="p-5 mt-4">
            <Row className="p-5 pb-0 mb-0">
                
                <Col xs={4} className="p-1 ms-5">
                    <Image
                        src="https://shorturl.at/clAY6"
                        alt="something"
                        roundedCircle
                        className="image-size ms-5 position-absolute"
                    />
                </Col>
                
                
                <Image
                    src="https://shorturl.at/clAY6"
                    alt="something"
                    fluid
                    style={{ height: '450px'}}
                />

                <Row className="m-5"></Row>
                <Row className="m-5"></Row>
                <Row className="m-4"></Row>
                
                <Row className="ms-5">
                    <Col className="ms-5 ps-5">
                        <h2 className="fs-1 fw-bold text-start">CAT NAME</h2>
                        <h3>LOCATION</h3>
                        <hr></hr>
                    </Col>
                </Row>

                <Row>
                    <Button variant="primary"></Button>
                </Row>
                
                
            </Row>
            
            {/* <Row className="ms-4">
                
                <Col></Col>
                <Col></Col>
            </Row> */}
        </Container>
    )
}

export default CatProfile

