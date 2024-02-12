import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import React, {useState} from 'react'

function AddACat(){
    const [formData, setFormData] = useState({
        name: '',
        livesIn: '',
        originallyFrom: '',
        nickname: '',
    })
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [backgroundPhoto, setBackgroundPhoto] = useState(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const {name, files} = e.target;
        if (name === 'profilePhoto') {
            setProfilePhoto(files[0]);
        } else if (name === 'backgroundPhoto') {
            setBackgroundPhoto(files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
    
        const jsonData = {
            name: formData.name,
            livesIn: formData.livesIn,
            originallyFrom: formData.originallyFrom,
            nickname: formData.nickname,
        }
        try {
            const response = await fetch('https://catspace.onrender.com/cats', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });
    
            if (!response.ok) throw new Error('Network response was not ok');
            
            setFormData({
                name: '',
                livesIn: '',
                originallyFrom: '',
                nickname: '',
            });
            setProfilePhoto(null); 
            setBackgroundPhoto(null); 
    
            const result = await response.json();
            console.log("Submission successful, result:", result);
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };
    



    return(
        <Container className='my-4'>
            <Row className='mt-4'>
                <h2 className='text-center mt-5'>Add a Cat!</h2>
            </Row>
            
            <Row className='mx-5 mt-4'>
                <Col className='mx-5 mb-5'>
                    <Form onSubmit={handleSubmit} className='mx-5 border p-5 bg-light'>
                        
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name"value={formData.name} onChange={handleInputChange}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicLivesIn'>
                        <Form.Label>Lives In:</Form.Label>
                        <Form.Control type="text" placeholder="Enter home"name="livesIn"value={formData.livesIn} onChange={handleInputChange}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicFrom'>
                        <Form.Label>Originally From</Form.Label>
                        <Form.Control type="text" placeholder="Enter origin"name="originallyFrom"  value={formData.originallyFrom} onChange={handleInputChange}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicNickname'>
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control type="text" placeholder="Enter Nickname" name="nickname"value={formData.nickname} onChange={handleInputChange}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicProfilePhoto'>
                        <Form.Label>Profile Photo</Form.Label>
                        <Form.Control type="file" name="profilePhoto"onChange={handleFileChange}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBackgroundPhoto'>
                        <Form.Label>Background Photo</Form.Label>
                        <Form.Control type="file" name="backgroundPhoto"onChange={handleFileChange}></Form.Control>
                    </Form.Group>
                    

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