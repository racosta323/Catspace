import { Container, Col, Row, Image } from "react-bootstrap"

function Home(){
    
    const mockCats = [
        {
            id: 1,
            name: "Fluffykins",
            image: "https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/small-cat-breeds/munchkin-cropped.jpg",
        },
        {
            id: 2,
            name: "Costco Hotdog",
            image: "https://www.catbreedslist.com/stories-images/funny-cat-names-with-meaning-400x225.jpg",
        },
        {
            id: 3,
            name: "Petuccine Alfriendo",
            image: "https://catamazing.com/cdn/shop/files/catshark.jpg?v=1649869148",
        },
        {
            id: 4,
            name: "Magnus",
            image: "https://i.redd.it/bdrgb54ad0521.jpg",
        }
    ]
    
    return (
        <Container>

            <h2>View a cat's profile!</h2>
            {/* im testing uploadavatar below but it will eventually be placed in the addcat page not this page */}
            <UploadAvatar /> 
            <div className="cat-cards">
                {mockCats.map(cat => <CatCard key={cat.id} name={cat.name} image={cat.image} />)}
            </div>  

            <Row className="m-5"></Row>
            <Row className="m-5">
                <Col>
                    <h3 className="fs-1">Behold</h3>
                </Col>
            </Row>

            <Row>
                
                <Col>
                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size m-5"
                    />

                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size m-5"
                    />

                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size m-5"
                    />

                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size m-5"
                    />

                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size m-5"
                    />

                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size m-5"
                    />
                </Col>

                {/* <Col>
                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size"
                    />
                </Col>

                <Col>
                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size"
                    />
                </Col>

                <Col>
                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size"
                    />
                </Col>

                <Col>
                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size"
                    />
                </Col>
                
                <Col>
                    <Image
                        src="https://www.rd.com/wp-content/uploads/2022/03/GettyImages-509629699-scaled-e1648763472476.jpg?fit=700,466"
                        alt="something"
                        roundedCircle
                        className="home-image-size"
                    />
                </Col>

                
        */}

            </Row>
       
       
       
       
       </Container>
    )
}

export default Home;