import { useState, useEffect } from "react"; 
import { Navigate, useNavigate, useParams } from "react-router-dom"; //extract the ID from the URL
import { Form, Button } from "react-bootstrap";
import axios from "axios";
function UpdateUser() {
  const { id } = useParams(); //save the extracted ID in the variable
  const [fname, setFname] = useState("");
  const [age, setAge] = useState("");
  const [addr, setAddr] = useState("");
  const Navigate = useNavigate()
 // const [users, setUsers] = useState("")
  const fetchUser = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/update-user/${id}`);
      
      const userData = response.data;
      console.log(userData)
      setFname(userData.fname); 
      setAge(userData.age); 
      setAddr(userData.addr);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser  = { fname, age, addr }; // Adjust according to your API
      await axios.put(`http://localhost:5000/api/update-user/${id}`, updatedUser );
      alert("User  updated successfully!");
      Navigate('/')
    } catch (error) {
      console.log("Error updating user", error);
    }
  };

  return (
    <div>
      <h1>Update Component</h1>
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
          Update User
        </Button>
      </Form>
    </div>
  );
}


export default UpdateUser;
