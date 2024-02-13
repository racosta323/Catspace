import { Container, Col, Row, Figure, Image, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import CatButtons from "./CatButtons";

function Home() {
    const { cats, searchTerm } = useOutletContext();

    const addCatButton = (
        <Col xs={12} sm={6} md={4} lg={3} className="cat-button" key="add-cat">
            <a href="/addacat" className="d-block mb-4 h-100">
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="Add a cat"
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        roundedCircle
                        className="mx-5 my-3"
                    />
                    <Figure.Caption className="fs-3 text-center">
                        Add a cat
                    </Figure.Caption>
                </Figure>
            </a>
        </Col>
    );

    const filteredCats = searchTerm
        ? cats.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : cats;

    const renderCats = [
        addCatButton,
        ...filteredCats.map(cat => (
            <Col xs={12} sm={6} md={4} lg={3} className="cat-button" key={cat.id}>
                <CatButtons name={cat.name} image={cat.profilePhoto} id={cat.id} />
            </Col>
        ))
    ];

    return (
        <Container>
            <Row className="m-4"></Row>
            <Row className="m-4">
                <Col className="mt-5">
                    <Row className="mt-5"></Row>
                    <Row className="mt-5"></Row>
                    <h1 className="fs-1 mt-5">Behold</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Donec nulla metus, commodo nec augue vel, lacinia consequat eros.</p>
                    <Row className="mb-5"></Row>
                    <Row className="mb-5">
                        <Col>
                            <Button size="lg" href="#half">Get Started</Button>{' '}
                            <Button size="lg" href="/addacat">Add a cat!</Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Image
                        src="https://www.fernvet.co.za/wp-content/uploads/2018/02/Cat-White-Background-Images.jpg"
                        alt="cat coming out of wall"
                        height={450}
                    />
                </Col>
                <Row className="m-5"></Row>
                <Row className="m-5"></Row>
                <Row className="m-5"></Row>
            </Row>




            <a id="half"></a>
                <Row className="bg-light border p-5">
                    <Col className="ms-4">

                    {/* add a cat button */}
                        <a href="/addacat">
                            <Figure>
                                <Figure.Image
                                    src="https://res.cloudinary.com/djsqcm710/image/upload/f_auto,q_auto/newCatImage_ivzaq2"
                                    alt="something"
                                    roundedCircle
                                    className="mx-5"
                                    width={200}
                                    height={180}
                                />
                                <Figure.Caption className="fs-3 mx-5 text-center mb-5">
                                    Add a cat
                                </Figure.Caption>
                            </Figure>  
                        </a>    

                    {/* new cats here */}
                    
                    { renderCats }
                        

                        
                    </Col>
                </Row>
            
       </Container>
    )
}

export default Home;