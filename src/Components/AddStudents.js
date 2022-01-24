import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { URL } from '../App';
import axios from 'axios';

function AddStudents() {
    const nav = useNavigate('');
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [cls, setcls] = useState("");

    // const handleSubmit = async () => {
    //     await fetch(URL, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             name, mobile, email, cls
    //         })
    //     })
    //         .then(response => response.json())
    //         .then((data) =>
    //             nav("/all-students"))
    // }

    //Axios POST
    const handleSubmit = async () => {
        try {
            await axios.post(URL, {
                name, mobile, email, cls
            })
            nav("/all-students")
        }
        catch (err) {
            alert('There is a problem, please view error in console');
            console.log(err);
        }
    }
    return (
        <div>
            <h2>AddStudents</h2>
            <hr />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control type="text" placeholder="Mobile" onChange={(e) => setmobile(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Batch </Form.Label>
                    <Form.Control type="text" placeholder="Batch" onChange={(e) => setcls(e.target.value)} />
                </Form.Group><br />
                <Button variant="success" onClick={handleSubmit}>Add Student</Button>
            </Form>
        </div>
    )
}

export default AddStudents
