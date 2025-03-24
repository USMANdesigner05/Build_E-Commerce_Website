import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
    // State to hold form data
   const [fname,setFname] = useState("")
   const [lname,setLname] = useState("")
   const [email,setEmail] = useState("")
   const [phone,setPhone] = useState("")
   const [address,setAddress] = useState("")
   const [city,setCity] = useState("")
   const [zip,setZip] = useState("")


   const [userdata ,setUserdata] = useState([]);

    // State to hold the data from localStorage
  
    // Handle input changes for form fields
  

    // Handle form submission
    const fromsubmit = ()=>{
         const  NewUsers = {fname,lname,email,phone,address,city,zip} 


        setUserdata([...NewUsers, NewUsers]) 
    }


    const SubmitUserdata = ()=>{

    }


    // useEffect to load data from localStorage when the component mounts

    return (
        <>
            <div className="container p-5 d-flex justify-content-center">
                <Form autoComplete='off' onSubmit={fromsubmit} lg={12} style={{ textAlign: "left", borderRadius: "12px", border: "1px solid white", padding: "1.6rem", boxShadow: "5px 5px 15px black", backgroundColor: "#EBE8DB", }}>
                    <Row className="mb-2">
                        <Form.Group as={Col} xs={12} sm={6} controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter frist name"
                                name="fname"
                                value={fname}
                                onChange={(e)=>setFname(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} xs={12} sm={6} controlId="formGridPassword">
                            <Form.Label>Last name </Form.Label>
                            <Form.Control type="text" placeholder="Enter last name"
                                name="lname"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder="enter your email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control placeholder="Phone Number"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} sm={6} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} xs={12} sm={6} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                name="zip"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="button" className='px-1 fs-5 py-2' xs={10} style={{
                        width: "23rem",

                    }}
                    onClick={SubmitUserdata}
                    >
                        Submit
                    </Button>
                </Form>
            </div>

            {/* Displaying Data in Table */}
            <div className="container mt-5">
                <h3>Stored Data</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Zip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {storedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.address}</td>
                                <td>{data.city}</td>
                                <td>{data.zip}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </>


    );
}

export default GridComplexExample;