import { Container, Image, Row, Col, Button, Card } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"

function CatProfile(){

    const {deleteCat} = useOutletContext();

    const [cat, setCat] = useState(null);

    const params = useParams();
    const catId = params.id;
    
    useEffect(()=>{
        fetch(`https://catspace.onrender.com/cats/${catId}`)
        .then (resp => resp.json())
        .then(data => setCat(data))
        .catch(error=>console.log(error));
    }, [catId]);

    const renderBanner = (cat===null) ? null : cat.bannerPhoto;
    const renderProfilePhoto = (cat===null) ? null : cat.profilePhoto;
    const renderName = (cat===null) ? null : cat.name;
    const renderLocation = (cat===null) ? null : cat.livesIn;
    const renderOriginallyFrom = (cat===null) ? null : cat.originallyFrom;
    const renderNickname = (cat===null) ? null : cat.nickname;
    const renderPronounces = (cat===null) ? null : cat.pronounced;

    const navigate = useNavigate();   

    return(
        <Container fluid className="p-5 mt-4">
            <Row className="p-5 pb-0 mb-0">
                
            {/* <-- profile photo image --> */}
                <Col xs={4} className="p-1 ms-5">
                    <Image
                        src={ renderProfilePhoto }
                        alt="something"
                        roundedCircle
                        className="image-size ms-5 position-absolute border border-white p-1 bg-white"
                    />
                </Col>
                
            {/* <-- banner image --> */}
                <Image
                    src={ renderBanner }
                    alt="something"
                    // fluid
                    style={{ 
                        height: '475px',
                        'object-fit': 'cover'
                    }}
                />

                <Row className="m-5"></Row>
                <Row className="m-5"></Row>

            </Row>

            <Container fluid className="my-5">
                
                <Row className="ms-5">
                    <Col className="ms-5 ps-5">
                        <h2 className="fs-1 fw-bold text-start ms-5">{ renderName }</h2>
                        <h4 className="ms-5"> Pronounces Name: "{ renderPronounces }" </h4>
                        <h3 className="ms-5">{ renderLocation }</h3>

            {/* <--Photos button--> */}
                        <Row className="m-3"></Row>
                        {/* <Button href="#" variant="primary" className="ms-5">Photos</Button> */}
                        {/* this will be added back once photos are implemented! */}
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
                                <Card.Text className="fs-4 fw-medium">Lives in: { renderLocation }</Card.Text>
                                <Card.Text className="fs-4 fw-medium">From: { renderOriginallyFrom } </Card.Text>
                                <Card.Text className="fs-4 fw-medium">Nickname: { renderNickname } </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            {/* <--Comments section--> */}
                <Row className="mx-5 mt-0">
                    <Col className="my-4 ps-5">
                        <Card>
                            <Card.Body className="shadow-lg bg-white rounded">
                                <Card.Text className="fs-2 fw-semibold">DESCRIPTION</Card.Text>
                                <Card.Text className="fs-5">Description!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <Row className="mx-5">
                    <Col>
                        <Button variant="danger" className= "ms-5" value ={catId} onClick={deleteCat}>Delete Profile</Button>
                    </Col>
                </Row>
                
            </Container>
        </Container>
    );
}

export default CatProfile;

