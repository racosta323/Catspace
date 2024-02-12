import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import React, {useState} from 'react'

function AddACat(){
    const [formData, setFormData] = useState({
        name: '',
        livesIn: '',
        originallyFrom: '',
        nickname: '',
        profilePhotoUrl: '', 
        bannerPhotoUrl: '', 
    })
    const [profilePhotoUrl, setProfilePhoto] = useState(null);
    const [bannerPhotoUrl, setBannerPhoto] = useState(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = async (e) => {
        const { name, files } = e.target;
        const file = files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'lzc5ipfk'); 
        formData.append('cloud_name', 'dretra7g8'); 

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dretra7g8/image/upload`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name + 'Url']: data.secure_url, 



            }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");

        try {
            const response = await fetch('https://catspace.onrender.com/cats', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    livesIn: formData.livesIn,
                    originallyFrom: formData.originallyFrom,
                    nickname: formData.nickname,
                    profilePhoto: formData.profilePhotoUrl,
                    bannerPhoto: formData.bannerPhotoUrl,
                }),
            });

            if (!response.ok) throw new Error('Network response was not ok');
            
            console.log("Submission successful");
            const result = await response.json();
            console.log("Result:", result);

            setFormData({
                name: '',
                livesIn: '',
                originallyFrom: '',
                nickname: '',
                profilePhotoUrl: '',
                bannerPhotoUrl: '',
            });
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

                    <Form.Group className='mb-3' controlId='formBannerPhoto'>
                        <Form.Label>Banner Photo</Form.Label>
                        <Form.Control type="file" name="bannerPhoto"onChange={handleFileChange}></Form.Control>
                    </Form.Group>
                    

                    <Row className='mt-4'>
                        <Col md={{ offset: 10 }}>
                            <Button type='submit' onClick={handleSubmit}>Submit</Button>
                        </Col>
                    </Row>
                    
                    </Form>
                </Col>
            </Row>

        </Container>
      )
}


export default AddACat