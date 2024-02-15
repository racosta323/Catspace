import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import { Button, Row, Col } from "react-bootstrap"
import { useState } from "react"



function CommentForm({ onAddComments }){

    
    const [formData, setFormData] = useState("")
    

    function handleChange(e){
        setFormData(e.target.value)
        
    }

    function handleSubmit(event){
        event.preventDefault()
        onAddComments(formData)
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup hasValidation>
                    <Form.Control as="textarea" aria-label="With textarea" onChange={handleChange}/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a name.
                    </Form.Control.Feedback>
                </InputGroup>
                <Button className="mt-4" type="submit">Leave a comment</Button>
            </Form.Group>
        </Form>
    )
}

export default CommentForm