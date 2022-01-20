import React from 'react'
import { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate,useParams } from 'react-router-dom';

function EditStudent( props) {
    
    const params = useParams();
    const nav = useNavigate('');
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [cls, setcls] = useState("");

    const handleSubmit = () => {
        let newData = { name, mobile, email, cls };
        let replicateArray = [...props.data.stu];
        replicateArray.splice(params.id,1,newData)
        props.data.setStu(replicateArray);
        nav("/all-students")
    }

    useEffect(()=>{
        if(params.id<props.data.stu.length
            &&params.id>=0)
        getData();
    else
        alert("No data found for this id...");
    }
    ,[])

    const getData= ()=>{
    setname(props.data.stu[params.id].name);
    setemail(props.data.stu[params.id].email);
    setmobile(props.data.stu[params.id].mobile);
    setcls(props.data.stu[params.id].cls);
    }

    return (
        <div>
            Edit Student
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control type="text" placeholder="Mobile" value={mobile} onChange={(e) => setmobile(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Batch </Form.Label>
                    <Form.Control type="text" placeholder="Batch" value={cls} onChange={(e) => setcls(e.target.value)} />
                </Form.Group><br/>
                <Button variant="success" onClick={handleSubmit}>Update Student</Button>
            </Form>

        </div>
    )
}

export default EditStudent
