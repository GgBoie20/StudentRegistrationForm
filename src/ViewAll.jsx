import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { CiViewBoard } from "react-icons/ci";
import toast from 'react-hot-toast';

const ViewAll = () => {

  let [ student, setStudent]=useState([])
  
  let getApi = async ()=>{
    let {data}= await axios.get("http://localhost:3000/student")
    setStudent(data)
  }
  console.log(student);
  useEffect(()=>{
     try {
      getApi()
     } catch (e) {
      console.log(e)
     }
  },[])

  let deleteStudent = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:3000/student/${id}`);
    window.location.assign("/ViewAll");
    toast.error("Successfully Deleted!");
  }
  
  return (
    <>
      <NavBar/>
      <h1 className='Head'>All Student's Information</h1>
      <table className='container'>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th colSpan="3">Options</th>
          </tr>
        </thead>
        <tbody>
         {student.map((x)=>{
          console.log(x);
          return(
            <tr key={x.id}> 
            <td>{x.id}</td>
            <td>{x.username}</td>
            <td>{x.email}</td>
            <td>{x.gender}</td>
            <td>{x.hobbies ? x.hobbies.join(', ') : ''}</td>
            <td>
              <NavLink to={`/edit/${x.id}`}>
                <button>UPDATE <GrUpdate /></button>
              </NavLink>
              </td>
            <td>
                <button onClick={()=>deleteStudent(x.id)} className='delete'>DELETE<MdDeleteForever /></button>
              </td>
            <td>
              <NavLink to={`/singlestu/${x.id}`}>
                <button className='vm'>VIEW-MORE<CiViewBoard /></button>
              </NavLink>
              </td>
          </tr>
          )
         })}
        </tbody>
      </table>
    </>
  )
}

export default ViewAll