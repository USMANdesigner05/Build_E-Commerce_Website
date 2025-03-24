import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormGroupExample() {
  return (
    <div className="container" style={{
      width: "100%",
      height:"100vh",
      textAlign: "left",
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
      flexDirection: 'column',
    }}>
      <Form style={{
        display:"flex",
        flexDirection:"column",
        gap:"1.4rem",
        padding:"5rem",
        borderRadius:"15px",
        width:"30rem",
        height:"450px",
        backgroundColor:"#D1D1D1",
        boxShadow:'5px 5px 10px rgb(187, 173, 173)',
        margin:'0px 5px'
      }}>
        
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className=' text-left'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{ width: "19rem", fontSize: "1.2rem", }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{ width: "19rem", fontSize: "1.2rem", }} />
        </Form.Group>
        <Button variant="primary" className='mt-3' style={{ width: "19rem", fontSize: "1.3rem", }}>
          Login in
        </Button>
      </Form>
    </div>
  );
}

export default FormGroupExample;