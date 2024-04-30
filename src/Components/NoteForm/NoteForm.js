import React, { useContext, useRef, useState }  from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Model from "../Model/Model";
import NotesContext from "../../Contexts/NotesContext";

function NoteForm (props){
    const notectx = useContext(NotesContext)
    const [show,setshow] = useState(props.show) 
    const Titleref = useRef ()
    const DescRef = useRef()
    const HandleHide = ()=>{
        setshow(false)
        props.hideform()
    }

    const noteformhandler = async (event)=>{
        event.preventDefault()
        const data = {
            Title: Titleref.current.value,
            Description: DescRef.current.value
        }

        console.log(data)

        const response = await fetch ('https://react-api-test-d5c70-default-rtdb.firebaseio.com/Notes.json',{
            method : 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(data)
        })

        if(response.ok){
            console.log(response)
            notectx.addnote()
            Titleref.current.value =''
            DescRef.current.value =''
            setshow(false)
            props.hideform()
        }
        
    }


    return <Model>
        <Modal show={show} onHide={HandleHide}>
            <Modal.Header><Modal.Title>Add New Note</Modal.Title></Modal.Header>
            <Modal.Body>
            <Form>
            
            <Form.Label>Note Title</Form.Label>
            <Form.Control type='text' placeholder="Title" ref={Titleref} required></Form.Control>
            <Form.Label>Note Description</Form.Label>
            <Form.Control type='text' placeholder="Description" ref={DescRef}></Form.Control>
            <Button onClick={noteformhandler}>Submit</Button>
        </Form>
            </Modal.Body>
        
        <Modal.Footer><Button className='btn-danger' onClick={HandleHide}> close</Button></Modal.Footer>
        

    </Modal> </Model>

}

export default NoteForm; 