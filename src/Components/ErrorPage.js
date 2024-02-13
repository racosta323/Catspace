import { Row, Col, Image, Nav } from "react-bootstrap"
import NavBar from "./NavBar"

function ErrorPage(){

    return(
        <>
            <NavBar />
            <Row className="vh-100 text-center d-flex align-items-center">
                <Col></Col>
                <Col>
                    <Image
                        src="https://www.shutterstock.com/image-photo/kitten-pile-gnawed-wires-isolated-600nw-1772656037.jpg"
                        alt="something"
                    />
                    <h2>Oh, no! We're stuck!</h2>
                    <p>Press back on your browser and try again!</p>
                </Col>
                <Col></Col>
            </Row>
        </>
    )
}

export default ErrorPage