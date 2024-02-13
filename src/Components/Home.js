import { Container, Col, Row, Figure, Button, Image } from "react-bootstrap"
import { useOutletContext } from "react-router-dom"
import CatButtons from "./CatButtons";


function Home(){
    
    const allCats = useOutletContext()

    const renderCats = (allCats === undefined) ? null : allCats.map((cat)=>{
        return <CatButtons name={cat.name} key={cat.id} image={cat.profilePhoto} id={cat.id}/>
    })

    
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