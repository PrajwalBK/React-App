import React, { useEffect, useState } from "react";
import { Table, Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import "./dashboard.css";
import axios from "axios";
function Dashboard() {
  const [users, setUsers] = useState([]);
  
  const Navigate = useNavigate()
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/list");
      //console.log("API Response:", response); // Log the entire response
      //console.log("User  Data:", response.data); // Log the user data
      // Directly set users to the response data
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        console.error("Expected an array but got:", response.data);
      }
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userID) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/delete-user/${userID}`
      );
      if (response.status === 200) {
        fetchUsers();
      }
    } catch (error) {
      console.log("Error deleting data", error);
    }
  };

  const handleUpdate = async(userID)=>{
    Navigate(`/updateUser/${userID}`)
  }

  useEffect(() => {
    console.log("Users state updated:", users); // Log the users state
  }, [users]);

  return (
    <div className="table-container">
      <h1>User Details</h1>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.fname}</td>
              <td>{user.age}</td>
              <td>{user.addr}</td>
              <td>
                <Button onClick={() => handleUpdate(user._id)} variant="success">Update</Button>{" "}
                <Button onClick={() => handleDelete(user._id)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Dashboard;
