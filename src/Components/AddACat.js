import { Container, Form, Row, Col, Button } from 'react-bootstrap'

function AddACat(){
    return(
        <Container className='my-4'>
            <Row className='mt-4'>
                <h2 className='text-center mt-5'>Add a Cat!</h2>
            </Row>
            
            <Row className='mx-5 mt-4'>
                <Col className='mx-5 mb-5'>
                    <Form className='mx-5 border p-5 bg-light'>
                        
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Name</Form.Label>
                        {/* <---- this is the "input"----> */}
                        <Form.Control type="text" placeholder="Enter name"></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicLivesIn'>
                        <Form.Label>Lives In:</Form.Label>
                        {/* <---- this is the "input"----> */}
                        <Form.Control type="text" placeholder="Enter where kitty currently lives"></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicFrom'>
                        <Form.Label>From</Form.Label>
                        {/* <---- this is the "input"----> */}
                        <Form.Control type="text" placeholder="Enter where kitty is originally from"></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicNickname'>
                        <Form.Label>Nickname</Form.Label>
                        {/* <---- this is the "input"----> */}
                        <Form.Control type="text" placeholder="Enter nickname"></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicProfilePhoto'>
                        <Form.Label>Profile Photo</Form.Label>
                        {/* <---- this is the "input"----> */}
                        <Form.Control type="file" placeholder="Enter nickname"></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBackgroundPhoto'>
                        <Form.Label>Background Photo</Form.Label>
                        {/* <---- this is the "input"----> */}
                        <Form.Control type="file" placeholder="Enter nickname"></Form.Control>
                    </Form.Group>
                    
                    {/* <---submit button---> */}

                    <Row className='mt-4'>
                        <Col md={{ offset: 10 }}>
                            <Button type='submit' >Submit</Button>
                        </Col>
                    </Row>
                    
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default AddACat