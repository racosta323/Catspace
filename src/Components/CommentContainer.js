import { Row, Col, Card } from "react-bootstrap"
import { useState } from "react"
import CommentForm from "./CommentForm"
import comments from "../comments"


function CommentContainer({ onAddComments, comment }){
    

    

    return(
        <Card>
            <Card.Body className="shadow-lg bg-white rounded">
                <Card.Text className="fs-2 fw-semibold">COMMENTS</Card.Text>
                <Card.Text className="fs-5">{ comment }</Card.Text>
                <CommentForm onAddComments={onAddComments}/>
            </Card.Body>
        </Card>


    )
}

export default CommentContainer