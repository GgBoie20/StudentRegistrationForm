import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleStudent = () => {

    let [student, setStudent]=useState({})

    let navigate = useNavigate()

    let {id}= useParams()
    console.log(id);

    let getApi= async()=>{
         let {data}= await axios.get("http://localhost:3000/student/"+id);
         setStudent(data)
    }
    
    console.log(student)
    
    let gotohome = ()=>{
        navigate("/")
    }
    let goback= ()=>{
        navigate(-1)
    }
    useEffect(()=>{
        try {
            getApi()
        } catch (e) {
            console.log(e);
        }
    },[])
  return (
    <>
        <section className='mainStuContainer'>
            <article className='subStuContainer'>
                <h1 className='sh'>Details of Individual Student</h1>
                <div>
                    <h1>Sr No : {student.id}</h1>
                    <h1>Username : {student.username}</h1>
                    <h1>Email : {student.email}</h1>
                    <h1>Gender : {student.gender}</h1>
                    <h1>Hobbies : {student.hobbies ? student.hobbies.join(', ') : ''}</h1>
                </div>
                
                <div>
                    <center><button onClick={gotohome}>Go To Home</button></center>
                    <center><button onClick={goback}>Go Back</button></center>
                </div>
            </article>
        </section>
    </>
  )
}

export default SingleStudent
