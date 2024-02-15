import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import React, {useState} from 'react'
import UploadAvatar from './UploadAvatar';
import { useNavigate } from "react-router-dom"
import InputGroup from "react-bootstrap/InputGroup"

function AddACat(){

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        livesIn: "",
        originallyFrom: "",
        nickname: "",
        profilePhotoUrl: "", 
        bannerPhotoUrl: "", 
        description: "",
        pronounced: ""
    })

    //validation
    const [validated, setValidated] = useState(false)
    


    const handleInputChange = async (e) => {
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

    //repeating code here but it's alright
    const handleAvatarChange = async (file) => {
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
                ['profilePhotoUrl']: data.secure_url, 



            }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleSubmit = async (e) => {

         //validation
        e.preventDefault()
        const form = e.target
        console.log(form.checkValidity())
        if (form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
            setValidated(true)
        }else{
            fetch('https://catspace.onrender.com/cats',{
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    livesIn: formData.livesIn,
                    originallyFrom: formData.originallyFrom,
                    nickname: formData.nickname,
                    profilePhoto: formData.profilePhotoUrl,
                    bannerPhoto: formData.bannerPhotoUrl,
                    description: formData.description,
                    pronounced: formData.pronounced
                })
            })
            .then(resp=>resp.json())
            .then(data=>{
                navigate(`/profile/${data.id}`)
                setFormData({
                    name: '',
                    livesIn: '',
                    originallyFrom: '',
                    nickname: '',
                    profilePhotoUrl: '',
                    bannerPhotoUrl: '',
                    description: '',
                    pronounced: ''
                });
            })
        }
    }
 
    

    return(
        <Container className='my-4'>
            <Row className='mt-4'>
                <h2 className='text-center mt-5'>Add a Cat!</h2>
            </Row>
            
            <Row className='mx-5 mt-4'>
                <Col className='mx-3 mb-5'>
                    
                    <Form noValidate validated={ validated } onSubmit={handleSubmit} className='mx-5 border p-5 bg-light'>
                        
                        <Form.Group className='mb-3' controlId='formBasicName'>
                            <Form.Label>Name:</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleInputChange} required></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a name.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicName'>
                            <Form.Label>Pronounciation:</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control type="text" placeholder="Enter name pronounciation" name="pronounce" onChange={handleInputChange} value={formData.pronounced}  required></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a name.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicLivesIn'>
                            <Form.Label>Lives In:</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control required type="text" placeholder="Enter home" name="livesIn" value={formData.livesIn} onChange={handleInputChange}></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a place where your cat lives.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicFrom'>
                            <Form.Label>Originally From:</Form.Label>    
                            <InputGroup hasValidation>
                                <Form.Control required type="text" placeholder="Enter origin"name="originallyFrom"  value={formData.originallyFrom} onChange={handleInputChange}></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                        Please enter a place where your cat is originally from.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicNickname'>
                            <Form.Label>Nickname:</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Nickname" name="nickname"value={formData.nickname} onChange={handleInputChange}></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                    Please enter a nickname.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicDescription'>
                            <Form.Label>Description:</Form.Label>
                            <Form.Control required as="textarea" placeholder="Enter description of cat" name="description" value={formData.description} onChange={handleInputChange}></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                    Please enter a description of your cat
                            </Form.Control.Feedback>
                        </Form.Group>

                        

                        <Form.Group className='mb-3' controlId='formBasicProfilePhoto'>
                            <Form.Label>Upload Profile Photo:</Form.Label>
                            {/* <Form.Control className='margins-auto' type="file" name="profilePhoto"onChange={handleFileChange}></Form.Control> */}
                            <div > 
                            <UploadAvatar handleAvatarChange={handleAvatarChange} />
                            </div>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBannerPhoto'>
                            <Form.Label>Upload Banner Photo:</Form.Label>
                            <Form.Control type="file" name="bannerPhoto" onChange={handleFileChange}></Form.Control>
                        </Form.Group>
                        

                        <Row className='mt-4'>
                            <Col md={{ offset: 10 }}>
                                <Button type='submit'>Submit</Button>
                            </Col>
                        </Row>
                    
                    </Form>
                </Col>
            </Row>

        </Container>
      )
}


export default AddACat;