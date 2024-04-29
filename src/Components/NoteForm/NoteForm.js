import React, { useRef, useState }  from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Model from "../Model/Model";

function NoteForm (props){
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

        const response = await fetch ('https://crudcrud.com/api/7109fa7396804d2c8538f9fcd65ec16a',{
            method : 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(data)
        })

        if(response.ok){
            console.log(response)
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