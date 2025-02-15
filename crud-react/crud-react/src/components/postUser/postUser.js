//import React, { useCallback } from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./User.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


function PostUser() {

  const [fname, setFname] = useState('');

  const [age, setAge] = useState('');

  const [addr, setAddr] = useState('');
  const Navigate = useNavigate()

  const handleSubmit = async (e) => {

      e.preventDefault();

      try {

          const response = await axios.post('http://localhost:5000/api/users', {
              fname,
              age,
              addr,
          });
          console.log('User  added:', response.data);
          // Clear the form
          setFname('');
          setAge('');
          setAddr('');
          Navigate('/')
      } catch (error) {
          console.error('Error adding user:', error);
      }

  };
  return (
    <div className="center-form">
      <h1>POST USER</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            name="stdName"
            value={fname}
            placeholder="Enter name"
            onChange={(e) => setFname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            name="age"
            value={age}
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="addr"
            value={addr}
            placeholder="Enter Address"
            onChange={(e) => setAddr(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          ADD USER
        </Button>
      </Form>
    </div>
  )};

export default PostUser;
