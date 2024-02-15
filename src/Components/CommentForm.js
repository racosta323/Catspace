import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import { Button } from "react-bootstrap"
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
            <InputGroup hasValidation>
                <Form.Control as="textarea" aria-label="With textarea" onChange={handleChange}/>
                <Button className="mt-4" type="submit">Leave a comment</Button>
                <Form.Control.Feedback type="invalid">
                    Please enter a name.
                </Form.Control.Feedback>
            </InputGroup>
        </Form>
    )
}

export default CommentForm