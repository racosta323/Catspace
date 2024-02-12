import { Container, Col, Row, Figure } from "react-bootstrap"
import { useOutletContext } from "react-router-dom"
import { useState } from "react"
import CatButtons from "./CatButtons";


function Home(){
    
    const allCats = useOutletContext()

    const renderCats = (allCats === undefined) ? null : allCats.map((cat)=>{
        return <CatButtons name={cat.name} key={cat.id} image={cat.profilePhoto}/>
    })

    // console.log(renderName)
    
    return (
        <Container>

        {/* <---Eve's Avatar section---> */}
            {/* <h2>View a cat's profile!</h2>
            im testing uploadavatar below but it will eventually be placed in the addcat page not this page
            <UploadAvatar />  */}

        {/* <---Eve's mapping---> */}
            {/* <div className="cat-cards">
                {mockCats.map(cat => <CatCard key={cat.id} name={cat.name} image={cat.image} />)}
            </div>   */}

            <Row className="m-5"></Row>
            <Row className="m-5">
                <Col>
                    <h3 className="fs-1">Behold</h3>
                </Col>
            </Row>

            <Row>
                <Col className="ms-4">

                {/* add a cat */}
                    <a href="/addacat">
                        <Figure>
                            <Figure.Image
                                src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
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