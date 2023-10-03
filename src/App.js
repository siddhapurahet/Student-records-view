import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);  //UseState hook to change the state according to latest value from the aPI

  useEffect(() => {                          // For the sude effects
    axios.get('/students/all').then(res => {
      setStudents(res.data.students);
    });
  }, []);         // Empty array used as we only want the useEffect to be updated once a request.

  return (
    <div>
      <h1>Student List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Class</th>
            <th>Description</th>
            <th>Image</th>
            <th>Date of Birth</th>
          </tr>
          <tr>
            <td>{students.name}</td>
            <td>{students.classname}</td>
            <td>{students.rollNo}</td>
            <td>{students.description}</td>
            <td>{students.classnamimage}</td>
            <td>{students.dob}</td>
          </tr>
        </thead>
      </table>
    </div>
  )};

  export default StudentList;